package com.example.springsocial.controller;


import com.example.springsocial.exception.ResourceNotFoundExceptionNew;
import com.example.springsocial.model.FillFile;
import com.example.springsocial.model.ShortFile;
import com.example.springsocial.repository.FillFileRepository;
import com.example.springsocial.repository.ShortFileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
// Spring REST controller which map HTTP requests to the /fillfiles endpoint.
// getAllFillfile() retrieves all FillFile objects from the database,
// getFillfileById() retrieves a specific FillFile object by its ID.
@RestController
@RequestMapping("/fillfiles")
public class FillFileController {

    @Autowired
    private FillFileRepository fillFileRepository;

    // GET /fillfiles
    @PreAuthorize("hasRole('USER')")
    @GetMapping
    public List<FillFile> getAllFillfile(){
        // retrieve all FillFile objects using the FillFileRepository interface
        return fillFileRepository.findAll();
    }

    // GET /fillfiles/{id}
    @PreAuthorize("hasRole('USER')")
    @GetMapping("{id}")
    public ResponseEntity<FillFile> getFillfileById(@PathVariable  long id){
        // retrieve a FillFile object with the given id using the FillFileRepository interface
        FillFile fillFile = fillFileRepository.findById(id)
                // throw a ResourceNotFoundExceptionNew if the FillFile object is not found
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Fill file not exist with id:" + id));
        // return a ResponseEntity with the FillFile object and HTTP status 200 OK
        return ResponseEntity.ok(fillFile);
    }


}
