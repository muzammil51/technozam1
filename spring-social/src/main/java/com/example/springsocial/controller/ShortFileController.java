package com.example.springsocial.controller;


import com.example.springsocial.exception.ResourceNotFoundExceptionNew;
import com.example.springsocial.model.NotesFile;
import com.example.springsocial.model.ShortFile;
import com.example.springsocial.repository.NotesfileRepository;
import com.example.springsocial.repository.ShortFileRepository;
import com.example.springsocial.repository.ShortTextRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

// Spring REST controller which map HTTP requests to the /shortfiles endpoint.
// getAllShortfile() retrieves all ShortFile objects from the database,
// getShortfileById() retrieves a specific ShortFile object by its ID.

@RestController // marks the class as a Spring REST controller
@RequestMapping("/shortfiles") // maps HTTP requests to /shortfiles endpoint
public class ShortFileController {

    @Autowired // injects ShortFileRepository dependency
    private ShortFileRepository shortFileRepository;

    @PreAuthorize("hasRole('USER')") // requires 'USER' role to access this endpoint
    @GetMapping // maps HTTP GET request to /shortfiles endpoint
    public List<ShortFile> getAllShortfile(){

        return shortFileRepository.findAll(); // retrieves all ShortFile objects from the database
    }

    // builds a get problem by id REST API
    @PreAuthorize("hasRole('USER')") // requires 'USER' role to access this endpoint
    @GetMapping("{id}") // maps HTTP GET request to /shortfiles/{id} endpoint
    public ResponseEntity<ShortFile> getShortfileById(@PathVariable  long id){

        // retrieves ShortFile object from the database by id or throws a ResourceNotFoundExceptionNew if not found
        ShortFile shortFile = shortFileRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Short file not exist with id:" + id));
        // returns ShortFile object and HTTP status code 200 (OK)
        return ResponseEntity.ok(shortFile);
    }



}
