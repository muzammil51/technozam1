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

@RestController
@RequestMapping("/fillfiles")
public class FillFileController {

    @Autowired
    private FillFileRepository fillFileRepository;


    @PreAuthorize("hasRole('USER')")
    @GetMapping
    public List<FillFile> getAllFillfile(){
        return fillFileRepository.findAll();
    }



    // build get problem by id REST API
    @PreAuthorize("hasRole('USER')")
    @GetMapping("{id}")
    public ResponseEntity<FillFile> getFillfileById(@PathVariable  long id){
        FillFile fillFile = fillFileRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Fill file not exist with id:" + id));
        return ResponseEntity.ok(fillFile);
    }


}
