package com.example.springsocial.controller;


import com.example.springsocial.exception.ResourceNotFoundExceptionNew;
import com.example.springsocial.model.FillText;
import com.example.springsocial.model.FillText;
import com.example.springsocial.repository.FillTextRepository;
import com.example.springsocial.repository.FillTextRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
// Spring REST controller which map HTTP requests to the /filltexts endpoint.
// getAllFilltext() retrieves all FillText objects from the database,
// getFilltextById() retrieves a specific FillText object by its ID.
@RestController
@RequestMapping("/filltexts")
public class FillTextController {

    @Autowired
    private FillTextRepository fillTextRepository;

    // GET /filltexts
    @PreAuthorize("hasRole('USER')")
    @GetMapping
    public List<FillText> getAllFilltext() {
        // retrieve all FillText objects using the FillTextRepository interface
        return fillTextRepository.findAll();
    }

    // GET /filltexts/{id}
    @PreAuthorize("hasRole('USER')")
    @GetMapping("{id}")
    public ResponseEntity<FillText> getFilltextById(@PathVariable long id) {
        // retrieve a FillText object with the given id using the FillTextRepository interface
        FillText fillText = fillTextRepository.findById(id)
                // throw a ResourceNotFoundExceptionNew if the FillText object is not found
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Fill Text not exist with id:" + id));
        // return a ResponseEntity with the FillText object and HTTP status 200 OK
        return ResponseEntity.ok(fillText);
    }
}
