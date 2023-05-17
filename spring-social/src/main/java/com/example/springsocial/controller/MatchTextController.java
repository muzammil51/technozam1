package com.example.springsocial.controller;


import com.example.springsocial.exception.ResourceNotFoundExceptionNew;
import com.example.springsocial.model.MatchText;
import com.example.springsocial.model.MatchText;
import com.example.springsocial.repository.MatchTextRepository;
import com.example.springsocial.repository.MatchTextRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

// Spring REST controller which map HTTP requests to the /matchtexts endpoint.
// getAllMatchtext() retrieves all MatchText objects from the database,
// getMatchtextById() retrieves a specific MatchText object by its ID.

// The @RestController annotation indicates that this class is a RESTful controller that
// handles HTTP requests and responses.

@RestController

// The @RequestMapping annotation maps HTTP requests to a particular handler method based
// on the request URL. In this case, all requests to "/matchtexts" will be handled by this controller.

@RequestMapping("/matchtexts")
public class MatchTextController {

    // The @Autowired annotation injects an instance of the MatchTextRepository class into this controller.

    @Autowired
    private MatchTextRepository matchTextRepository;


    // The @PreAuthorize annotation specifies that only users with the "USER" role are authorized
    // to access this method.

    // The @GetMapping annotation maps HTTP GET requests to this method, which returns a list of
    // all MatchText objects in the repository.

    @PreAuthorize("hasRole('USER')")
    @GetMapping
    public List<MatchText> getAllMatchtext(){
        return matchTextRepository.findAll();
    }

    // The @PreAuthorize annotation specifies that only users with the "USER" role are authorized
    // to access this method.

    // The @GetMapping annotation maps HTTP GET requests to this method, which retrieves a single
    // MatchText object from the repository by ID and returns it as a ResponseEntity.

    @PreAuthorize("hasRole('USER')")
    @GetMapping("{id}")
    public ResponseEntity<MatchText> getMatchtextById(@PathVariable  long id){
        MatchText matchText = matchTextRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Match Text not exist with id:" + id));
        return ResponseEntity.ok(matchText);
    }



}
