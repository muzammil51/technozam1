package com.example.springsocial.controller;


import com.example.springsocial.exception.ResourceNotFoundExceptionNew;
import com.example.springsocial.model.NotesFile;
import com.example.springsocial.model.NotesText;
import com.example.springsocial.repository.NotesfileRepository;
import com.example.springsocial.repository.NotestextRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/notesfiles")
public class NotesFileController {

    @Autowired
    private NotesfileRepository notesfileRepository;


    @PreAuthorize("hasRole('USER')")
    @GetMapping
    public List<NotesFile> getAllNotesfile(){
        return notesfileRepository.findAll();
    }



    // build get problem by id REST API
    @PreAuthorize("hasRole('USER')")
    @GetMapping("{id}")
    public ResponseEntity<NotesFile> getNotesfileById(@PathVariable  long id){
        NotesFile notesFile = notesfileRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Notes file not exist with id:" + id));
        return ResponseEntity.ok(notesFile);
    }


}
