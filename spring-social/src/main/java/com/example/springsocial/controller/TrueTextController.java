package com.example.springsocial.controller;


import com.example.springsocial.exception.ResourceNotFoundExceptionNew;
import com.example.springsocial.model.ShortText;
import com.example.springsocial.model.TrueText;
import com.example.springsocial.repository.ShortTextRepository;
import com.example.springsocial.repository.TrueTextRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

// Spring REST controller which map HTTP requests to the /truetexts endpoint.
// getAllTruetext() retrieves all TrueText objects from the database,
// getTruetextById() retrieves a specific TrueText object by its ID.

@RestController // mark class as Spring REST controller
@RequestMapping("/truetexts") // map HTTP requests to /truetexts endpoint
public class TrueTextController {

    @Autowired // inject TrueTextRepository dependency
    private TrueTextRepository trueTextRepository;

    @PreAuthorize("hasRole('USER')") // require 'USER' role to access this endpoint
    @GetMapping // map HTTP GET request to /truetexts endpoint
    public List<TrueText> getAllTruetext(){

        // retrieve all TrueText objects from database
        return trueTextRepository.findAll();
    }

    // build get problem by id REST API
    @PreAuthorize("hasRole('USER')") // require 'USER' role to access this endpoint
    @GetMapping("{id}") // map HTTP GET request to /truetexts/{id} endpoint
    public ResponseEntity<TrueText> getTruetextById(@PathVariable  long id){

        // retrieve TrueText object from database by id
        TrueText trueText = trueTextRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("True Text not exist with id:" + id));
        // return TrueText object and HTTP status code 200 (OK)
        return ResponseEntity.ok(trueText);
    }



}
