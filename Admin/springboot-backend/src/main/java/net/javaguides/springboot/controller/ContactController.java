package net.javaguides.springboot.controller;


import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Contact;
import net.javaguides.springboot.model.Report;
import net.javaguides.springboot.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/contacts")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @GetMapping
    public List<Contact> getAllProblems(){
        return contactRepository.findAll();
    }

    // build create problem REST API
    @PostMapping()
    public Contact createProblem(@RequestBody Contact contact) {

        return contactRepository.save(contact);
    }

    // build get problem by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Contact> getProblemById(@PathVariable  long id){
        Contact contact = contactRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Problem not exist with id:" + id));
        return ResponseEntity.ok(contact);
    }

    // build delete User REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteProblem(@PathVariable long id){

        Contact contact = contactRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Contact not exist with id: " + id));

        contactRepository.delete(contact);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }



}
