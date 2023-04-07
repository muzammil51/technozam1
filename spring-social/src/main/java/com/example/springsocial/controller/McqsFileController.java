package com.example.springsocial.controller;


import com.example.springsocial.exception.ResourceNotFoundExceptionNew;
import com.example.springsocial.model.McqsFile;
import com.example.springsocial.model.ShortFile;
import com.example.springsocial.repository.McqsFileRepository;
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
@RequestMapping("/mcqsfiles")
public class McqsFileController {

    @Autowired
    private McqsFileRepository mcqsFileRepository;

    @PreAuthorize("hasRole('USER')")
    @GetMapping
    public List<McqsFile> getAllMcqsfile(){
        return mcqsFileRepository.findAll();
    }



    // build get problem by id REST API
    @PreAuthorize("hasRole('USER')")
    @GetMapping("{id}")
    public ResponseEntity<McqsFile> getMcqsfileById(@PathVariable  long id){
        McqsFile mcqsFile = mcqsFileRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Mcqs file not exist with id:" + id));
        return ResponseEntity.ok(mcqsFile);
    }


}
