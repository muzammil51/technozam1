package com.example.springsocial.controller;


import com.example.springsocial.exception.ResourceNotFoundExceptionNew;
import com.example.springsocial.model.NotesText;
import com.example.springsocial.model.ShortText;
import com.example.springsocial.repository.NotesfileRepository;
import com.example.springsocial.repository.NotestextRepository;
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
@RequestMapping("/shorttexts")
public class ShortTextController {

    @Autowired
    private ShortTextRepository shortTextRepository;


    @PreAuthorize("hasRole('USER')")
    @GetMapping
    public List<ShortText> getAllShorttext(){
        return shortTextRepository.findAll();
    }

    // build get problem by id REST API
    @PreAuthorize("hasRole('USER')")
    @GetMapping("{id}")
    public ResponseEntity<ShortText> getShorttextById(@PathVariable  long id){
        ShortText shortText = shortTextRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Short Text not exist with id:" + id));
        return ResponseEntity.ok(shortText);
    }



}
