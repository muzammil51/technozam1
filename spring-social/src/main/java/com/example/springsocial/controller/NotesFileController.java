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

// Spring REST controller which map HTTP requests to the /notesfiles endpoint.
// getAllNotesfile() retrieves all NotesFile objects from the database,
// getNotesfileById() retrieves a specific NotesFile object by its ID.

@RestController // Indicates that this class is a RESTful controller that handles incoming HTTP requests.
@RequestMapping("/notesfiles") // Specifies the base URI for all endpoints in this controller.
public class NotesFileController {

    @Autowired // Marks this field for automatic dependency injection by Spring.
    private NotesfileRepository notesfileRepository; // The repository interface that provides access to NotesFile entities in the database.

    @PreAuthorize("hasRole('USER')") // Specifies that only authenticated users with the role 'USER' are allowed to access this endpoint.
    @GetMapping // Handles HTTP GET requests to the base URI of this controller.
    public List<NotesFile> getAllNotesfile(){ // Returns a list of all NotesFile entities in the database.
        return notesfileRepository.findAll();
    }

    // build get problem by id REST API
    @PreAuthorize("hasRole('USER')") // Specifies that only authenticated users with the role 'USER' are allowed to access this endpoint.
    @GetMapping("{id}") // Handles HTTP GET requests to the base URI of this controller with an ID parameter in the URI path.
    public ResponseEntity<NotesFile> getNotesfileById(@PathVariable  long id){ // Returns the NotesFile entity with the specified ID from the database.
        NotesFile notesFile = notesfileRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Notes file not exist with id:" + id)); // Finds the NotesFile entity with the specified ID or throws a ResourceNotFoundException if it doesn't exist.
        return ResponseEntity.ok(notesFile); // Wraps the NotesFile entity in a ResponseEntity with a 200 OK status code and returns it.
    }

}
