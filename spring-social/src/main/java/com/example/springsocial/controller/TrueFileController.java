package com.example.springsocial.controller;

import com.example.springsocial.exception.ResourceNotFoundExceptionNew;
import com.example.springsocial.model.ShortFile;
import com.example.springsocial.model.TrueFile;
import com.example.springsocial.repository.ShortFileRepository;
import com.example.springsocial.repository.TrueFileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

// Spring REST controller which map HTTP requests to the /truefiles endpoint.
// getAllTruefile() retrieves all TrueFile objects from the database,
// getTruefileById() retrieves a specific TrueFile object by its ID.

@RestController // mark class as Spring REST controller
@RequestMapping("/truefiles") // map HTTP requests to /truefiles endpoint
public class TrueFileController {

    @Autowired // inject TrueFileRepository dependency
    private TrueFileRepository trueFileRepository;

    @PreAuthorize("hasRole('USER')") // require 'USER' role to access this endpoint
    @GetMapping // map HTTP GET request to /truefiles endpoint
    public List<TrueFile> getAllTruefile(){

        // retrieve all TrueFile objects from database
        return trueFileRepository.findAll();
    }

    // build get problem by id REST API
    @PreAuthorize("hasRole('USER')") // require 'USER' role to access this endpoint
    @GetMapping("{id}") // map HTTP GET request to /truefiles/{id} endpoint
    public ResponseEntity<TrueFile> getTruefileById(@PathVariable  long id){

        // retrieve TrueFile object from database by id
        TrueFile trueFile = trueFileRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("True file not exist with id:" + id));
        // return TrueFile object and HTTP status code 200 (OK)
        return ResponseEntity.ok(trueFile);
    }


}
