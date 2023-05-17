package com.example.springsocial.controller;

// Spring REST controller which map HTTP requests to the /contacts endpoint.
// getAllContacts() retrieves all Contact objects from the database,
// getConatacsById() retrieves a specific Contact object by its ID.
import com.example.springsocial.exception.ResourceNotFoundExceptionNew;
import com.example.springsocial.model.Contact;
import com.example.springsocial.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contacts")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    // GET /contacts
    @PreAuthorize("hasRole('USER')")
    @GetMapping
    public List<Contact> getAllProblems(){
        // retrieve all Contact objects using the ContactRepository interface
        return contactRepository.findAll();
    }

    // POST /contacts
    @PreAuthorize("hasRole('USER')")
    @PostMapping()
    public Contact createProblem(@RequestBody Contact contact) {
        // save a new Contact object using the ContactRepository interface
        return contactRepository.save(contact);
    }

    // GET /contacts/{id}
    @PreAuthorize("hasRole('USER')")
    @GetMapping("{id}")
    public ResponseEntity<Contact> getProblemById(@PathVariable  long id){
        // retrieve a Contact object with the given id using the ContactRepository interface
        Contact contact = contactRepository.findById(id)
                // throw a ResourceNotFoundExceptionNew if the Contact object is not found
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Problem not exist with id:" + id));
        // return a ResponseEntity with the Contact object and HTTP status 200 OK
        return ResponseEntity.ok(contact);
    }



}
