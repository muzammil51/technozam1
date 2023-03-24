package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.User;
import net.javaguides.springboot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    // build create User REST API
    @PostMapping
    public User createUser(@RequestBody User User) {
        return userRepository.save(User);
    }

    // build get User by id REST API
    @GetMapping("{id}")
    public ResponseEntity<User> getUserById(@PathVariable  long id){
        User User = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not exist with id:" + id));
        return ResponseEntity.ok(User);
    }

    // build update User REST API
    @PutMapping("{id}")
    public ResponseEntity<User> updateUser(@PathVariable long id,@RequestBody User UserDetails) {
        User updateUser = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not exist with id: " + id));

        updateUser.setId(UserDetails.getId());

        updateUser.setEmail(UserDetails.getEmail());
        updateUser.setEmailVerified(UserDetails.getEmailVerified());
        updateUser.setImageUrl(UserDetails.getImageUrl());
        updateUser.setName(UserDetails.getName());
        updateUser.setPassword(UserDetails.getPassword());
        updateUser.setProvider(UserDetails.getProvider());
        updateUser.setProviderId(UserDetails.getProviderId());

        userRepository.save(updateUser);

        return ResponseEntity.ok(updateUser);
    }

    // build delete User REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable long id){

        User User = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not exist with id: " + id));

        userRepository.delete(User);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
