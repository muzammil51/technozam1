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
// Spring REST controller which map HTTP requests to the /notestexts endpoint.
// getAllNotestext() retrieves all NotesText objects from the database,
// getNotestextById() retrieves a specific NotesText object by its ID.

@RestController
@RequestMapping("/notestexts")
public class NotesTextController {

    @Autowired
    private NotestextRepository notestextRepository;

    @Autowired
    private NotesfileRepository notesfileRepository;

    // Get all notes text REST API
    // This API returns a list of all notes texts in the database
    // It requires the "USER" role to access it
    @PreAuthorize("hasRole('USER')")
    @GetMapping
    public List<NotesText> getAllNotestext(){
        return notestextRepository.findAll();
    }

    // Get notes text by ID REST API
    // This API returns a specific notes text with the given ID
    // It requires the "USER" role to access it
    // If the notes text with the given ID does not exist in the database, a ResourceNotFoundExceptionNew exception is thrown
    @PreAuthorize("hasRole('USER')")
    @GetMapping("{id}")
    public ResponseEntity<NotesText> getNotestextById(@PathVariable  long id){
        NotesText notesText = notestextRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Notes Text not exist with id:" + id));
        return ResponseEntity.ok(notesText);
    }


}
