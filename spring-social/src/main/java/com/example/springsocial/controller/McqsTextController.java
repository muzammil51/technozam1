package com.example.springsocial.controller;


import com.example.springsocial.exception.ResourceNotFoundExceptionNew;
import com.example.springsocial.model.McqsText;
import com.example.springsocial.model.ShortText;
import com.example.springsocial.repository.McqsTextRepository;
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
@RequestMapping("/mcqstexts")
public class McqsTextController {

    @Autowired
    private McqsTextRepository mcqsTextRepository;

    @PreAuthorize("hasRole('USER')")
    @GetMapping
    public List<McqsText> getAllMcqstext(){
        return mcqsTextRepository.findAll();
    }

    // build get problem by id REST API
    @PreAuthorize("hasRole('USER')")
    @GetMapping("{id}")
    public ResponseEntity<McqsText> getMcqstextById(@PathVariable  long id){
        McqsText mcqsText = mcqsTextRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Mcqs Text not exist with id:" + id));
        return ResponseEntity.ok(mcqsText);
    }

}
