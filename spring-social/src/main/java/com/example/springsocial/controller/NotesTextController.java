package com.example.springsocial.controller;


import com.example.springsocial.exception.ResourceNotFoundExceptionNew;
import com.example.springsocial.model.NotesFile;
import com.example.springsocial.model.NotesText;
import com.example.springsocial.repository.NotesfileRepository;
import com.example.springsocial.repository.NotestextRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/notestexts")
public class NotesTextController {

    @Autowired
    private NotestextRepository notestextRepository;

    @Autowired
    private NotesfileRepository notesfileRepository;


    @PreAuthorize("hasRole('USER')")
    @GetMapping
    public List<NotesText> getAllNotestext(){
        return notestextRepository.findAll();
    }

    // build get problem by id REST API
    @PreAuthorize("hasRole('USER')")
    @GetMapping("{id}")
    public ResponseEntity<NotesText> getNotestextById(@PathVariable  long id){
        NotesText notesText = notestextRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Notes Text not exist with id:" + id));
        return ResponseEntity.ok(notesText);
    }



}
