package com.example.springsocial.controller;


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

    @PreAuthorize("hasRole('USER')")
    @GetMapping
    public List<Contact> getAllProblems(){
        return contactRepository.findAll();
    }

    // build create problem REST API
    @PreAuthorize("hasRole('USER')")
    @PostMapping()
    public Contact createProblem(@RequestBody Contact contact) {

        return contactRepository.save(contact);
    }

    // build get problem by id REST API
    @PreAuthorize("hasRole('USER')")
    @GetMapping("{id}")
    public ResponseEntity<Contact> getProblemById(@PathVariable  long id){
        Contact contact = contactRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Problem not exist with id:" + id));
        return ResponseEntity.ok(contact);
    }



}
