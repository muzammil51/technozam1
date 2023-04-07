package com.example.springsocial.controller;


import com.example.springsocial.exception.ResourceNotFoundExceptionNew;
import com.example.springsocial.model.ShortText;
import com.example.springsocial.model.TrueText;
import com.example.springsocial.repository.ShortTextRepository;
import com.example.springsocial.repository.TrueTextRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/truetexts")
public class TrueTextController {

    @Autowired
    private TrueTextRepository trueTextRepository;

    @PreAuthorize("hasRole('USER')")
    @GetMapping
    public List<TrueText> getAllTruetext(){
        return trueTextRepository.findAll();
    }

    // build get problem by id REST API
    @PreAuthorize("hasRole('USER')")
    @GetMapping("{id}")
    public ResponseEntity<TrueText> getTruetextById(@PathVariable  long id){
        TrueText trueText = trueTextRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("True Text not exist with id:" + id));
        return ResponseEntity.ok(trueText);
    }



}
