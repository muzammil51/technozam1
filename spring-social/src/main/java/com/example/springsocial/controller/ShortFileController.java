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

@RestController
@RequestMapping("/shortfiles")
public class ShortFileController {

    @Autowired
    private ShortFileRepository shortFileRepository;


    @PreAuthorize("hasRole('USER')")
    @GetMapping
    public List<ShortFile> getAllShortfile(){
        return shortFileRepository.findAll();
    }



    // build get problem by id REST API
    @PreAuthorize("hasRole('USER')")
    @GetMapping("{id}")
    public ResponseEntity<ShortFile> getShortfileById(@PathVariable  long id){
        ShortFile shortFile = shortFileRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Short file not exist with id:" + id));
        return ResponseEntity.ok(shortFile);
    }


}
