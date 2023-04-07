package com.example.springsocial.controller;

import com.example.springsocial.exception.ResourceNotFoundExceptionNew;
import com.example.springsocial.model.ShortFile;
import com.example.springsocial.model.TrueFile;
import com.example.springsocial.repository.ShortFileRepository;
import com.example.springsocial.repository.TrueFileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/truefiles")
public class TrueFileController {

    @Autowired
    private TrueFileRepository trueFileRepository;

    @PreAuthorize("hasRole('USER')")
    @GetMapping
    public List<TrueFile> getAllTruefile(){
        return trueFileRepository.findAll();
    }

    // build get problem by id REST API
    @PreAuthorize("hasRole('USER')")
    @GetMapping("{id}")
    public ResponseEntity<TrueFile> getTruefileById(@PathVariable  long id){
        TrueFile trueFile = trueFileRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("True file not exist with id:" + id));
        return ResponseEntity.ok(trueFile);
    }


}
