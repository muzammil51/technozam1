package com.example.springsocial.controller;


import com.example.springsocial.exception.ResourceNotFoundExceptionNew;
import com.example.springsocial.model.FillText;
import com.example.springsocial.model.ShortText;
import com.example.springsocial.repository.FillTextRepository;
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
@RequestMapping("/filltexts")
public class FillTextController {

    @Autowired
    private FillTextRepository fillTextRepository;

    @PreAuthorize("hasRole('USER')")
    @GetMapping
    public List<FillText> getAllFilltext(){
        return fillTextRepository.findAll();
    }

    // build get problem by id REST API
    @PreAuthorize("hasRole('USER')")
    @GetMapping("{id}")
    public ResponseEntity<FillText> getFilltextById(@PathVariable  long id){
        FillText fillText = fillTextRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Fill Text not exist with id:" + id));
        return ResponseEntity.ok(fillText);
    }



}
