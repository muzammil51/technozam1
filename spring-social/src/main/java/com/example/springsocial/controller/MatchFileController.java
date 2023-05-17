package com.example.springsocial.controller;

import com.example.springsocial.exception.ResourceNotFoundExceptionNew;
import com.example.springsocial.model.MatchFile;
import com.example.springsocial.model.MatchFile;
import com.example.springsocial.repository.MatchFileRepository;
import com.example.springsocial.repository.MatchFileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

// Spring REST controller which map HTTP requests to the /matchfiles endpoint.
// getAllMatchfile() retrieves all MatchFile objects from the database,
// getMatchfileById() retrieves a specific MatchFile object by its ID.

// The @RestController annotation indicates that this class is a RESTful controller that
// handles HTTP requests and responses.

@RestController

// The @RequestMapping annotation maps HTTP requests to a particular handler method based
// on the request URL. In this case, all requests to "/matchfiles" will be handled by this controller.

@RequestMapping("/matchfiles")
public class MatchFileController {

    // The @Autowired annotation injects an instance of the MatchFileRepository class into this controller.

    @Autowired
    private MatchFileRepository matchFileRepository;

    // The @PreAuthorize annotation specifies that only users with the "USER" role are authorized
    // to access this method.

    // The @GetMapping annotation maps HTTP GET requests to this method, which returns a list of
    // all MatchFile objects in the repository.

    @PreAuthorize("hasRole('USER')")
    @GetMapping
    public List<MatchFile> getAllMatchfile(){
        return matchFileRepository.findAll();
    }

    // The @PreAuthorize annotation specifies that only users with the "USER" role are authorized
    // to access this method.

    // The @GetMapping annotation maps HTTP GET requests to this method, which retrieves a single
    // MatchFile object from the repository by ID and returns it as a ResponseEntity.

    @PreAuthorize("hasRole('USER')")
    @GetMapping("{id}")
    public ResponseEntity<MatchFile> getMatchfileById(@PathVariable  long id){
        MatchFile matchFile = matchFileRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Match file not exist with id:" + id));
        return ResponseEntity.ok(matchFile);
    }
}
