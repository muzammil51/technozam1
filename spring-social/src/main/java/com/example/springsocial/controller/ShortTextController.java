package com.example.springsocial.controller;

import com.example.springsocial.exception.ResourceNotFoundExceptionNew;
import com.example.springsocial.model.NotesText;
import com.example.springsocial.model.ShortText;
import com.example.springsocial.repository.NotesfileRepository;
import com.example.springsocial.repository.NotestextRepository;
import com.example.springsocial.repository.ShortTextRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

// Spring REST controller which map HTTP requests to the /shorttexts endpoint.
// getAllShorttext() retrieves all ShortText objects from the database,
// getShorttextById() retrieves a specific ShortText object by its ID.

@RestController // marks class as Spring REST controller
@RequestMapping("/shorttexts") // maps HTTP requests to /shorttexts endpoint
public class ShortTextController {

    @Autowired // injects ShortTextRepository dependency
    private ShortTextRepository shortTextRepository;

    @PreAuthorize("hasRole('USER')") // requires 'USER' role to access this endpoint
    @GetMapping // maps HTTP GET request to /shorttexts endpoint
    public List<ShortText> getAllShorttext(){

        // retrieves all ShortText objects from the database
        return shortTextRepository.findAll();
    }

    // builds a REST API to get a ShortText object by ID
    @PreAuthorize("hasRole('USER')") // requires 'USER' role to access this endpoint
    @GetMapping("{id}") // maps HTTP GET request to /shorttexts/{id} endpoint
    public ResponseEntity<ShortText> getShorttextById(@PathVariable  long id){

        // retrieves ShortText object from database by id
        ShortText shortText = shortTextRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Short Text not exist with id:" + id));
        // returns ShortText object and HTTP status code 200 (OK)
        return ResponseEntity.ok(shortText);
    }

}

