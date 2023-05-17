package com.example.springsocial.controller;


import com.example.springsocial.exception.ResourceNotFoundExceptionNew;
import com.example.springsocial.model.McqsFile;
import com.example.springsocial.model.McqsFile;
import com.example.springsocial.repository.McqsFileRepository;
import com.example.springsocial.repository.McqsFileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

// Spring REST controller which map HTTP requests to the /mcqsfiles endpoint.
// getAllMcqsfile() retrieves all McqsFile objects from the database,
// getMcqsfileById() retrieves a specific McqsFile object by its ID.


// The @RestController annotation indicates that this class is a RESTful controller that
// handles HTTP requests and responses.
@RestController

// The @RequestMapping annotation maps HTTP requests to a particular handler method based
// on the request URL. In this case, all requests to "/mcqsfiles" will be handled by this controller.
@RequestMapping("/mcqsfiles")
public class McqsFileController {

    // The @Autowired annotation injects an instance of the McqsFileRepository class into this controller.
    @Autowired
    private McqsFileRepository mcqsFileRepository;

    // The @PreAuthorize annotation specifies that only users with the "USER" role are authorized
    // to access this method.
    @PreAuthorize("hasRole('USER')")

    // The @GetMapping annotation maps HTTP GET requests to this method, which returns a list of
    // all McqsFile objects in the repository.
    @GetMapping
    public List<McqsFile> getAllMcqsfile(){
        return mcqsFileRepository.findAll();
    }

    // The @PreAuthorize annotation specifies that only users with the "USER" role are authorized
    // to access this method.

    // The @GetMapping annotation maps HTTP GET requests to "/{id}" to this method, which retrieves
    // an McqsFile object by its ID.
    @GetMapping("{id}")
    public ResponseEntity<McqsFile> getMcqsfileById(@PathVariable  long id){
        // The findById method searches the McqsFileRepository for an McqsFile object with the
        // specified ID. If no such object is found, the ResourceNotFoundExceptionNew is thrown.
        McqsFile mcqsFile = mcqsFileRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Mcqs file not exist with id:" + id));
        // The ResponseEntity class is used to represent the entire HTTP response, including the
        // status code, headers, and body. Here, a ResponseEntity with the retrieved McqsFile object
        // is returned with an "OK" status code.
        return ResponseEntity.ok(mcqsFile);
    }
}
