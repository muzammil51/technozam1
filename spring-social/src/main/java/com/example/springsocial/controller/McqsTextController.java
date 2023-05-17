package com.example.springsocial.controller;


import com.example.springsocial.exception.ResourceNotFoundExceptionNew;
import com.example.springsocial.model.McqsText;
import com.example.springsocial.repository.McqsTextRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
// Spring REST controller which map HTTP requests to the /mcqstexts endpoint.
// getAllMcqstext() retrieves all McqsText objects from the database,
// getMcqstextById() retrieves a specific McqsText object by its ID.


// The @RestController annotation indicates that this class is a RESTful controller that
// handles HTTP requests and responses.
@RestController

// The @RequestMapping annotation maps HTTP requests to a particular handler method based
// on the request URL. In this case, all requests to "/mcqstexts" will be handled by this controller.
@RequestMapping("/mcqstexts")
public class McqsTextController {

    // The @Autowired annotation injects an instance of the McqsTextRepository class into this controller.
    @Autowired
    private McqsTextRepository mcqsTextRepository;

    // The @PreAuthorize annotation specifies that only users with the "USER" role are authorized
    // to access this method.
    @PreAuthorize("hasRole('USER')")

    // The @GetMapping annotation maps HTTP GET requests to this method, which returns a list of
    // all McqsText objects in the repository.
    @GetMapping
    public List<McqsText> getAllMcqstext(){
        return mcqsTextRepository.findAll();
    }

    // The @PreAuthorize annotation specifies that only users with the "USER" role are authorized
    // to access this method.

    // The @GetMapping annotation maps HTTP GET requests to "/{id}" to this method, which retrieves
    // an McqsText object by its ID.
    @GetMapping("{id}")
    public ResponseEntity<McqsText> getMcqstextById(@PathVariable  long id){
        // The findById method searches the McqsTextRepository for an McqsText object with the
        // specified ID. If no such object is found, the ResourceNotFoundExceptionNew is thrown.
        McqsText mcqsText = mcqsTextRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Mcqs Text not exist with id:" + id));
        // The ResponseEntity class is used to represent the entire HTTP response, including the
        // status code, headers, and body. Here, a ResponseEntity with the retrieved McqsText object
        // is returned with an "OK" status code.
        return ResponseEntity.ok(mcqsText);
    }

}
