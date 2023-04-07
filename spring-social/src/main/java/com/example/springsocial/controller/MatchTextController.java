package com.example.springsocial.controller;


import com.example.springsocial.exception.ResourceNotFoundExceptionNew;
import com.example.springsocial.model.MatchText;
import com.example.springsocial.model.ShortText;
import com.example.springsocial.repository.MatchTextRepository;
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
@RequestMapping("/matchtexts")
public class MatchTextController {

    @Autowired
    private MatchTextRepository matchTextRepository;


    @PreAuthorize("hasRole('USER')")
    @GetMapping
    public List<MatchText> getAllMatchtext(){
        return matchTextRepository.findAll();
    }

    // build get problem by id REST API
    @PreAuthorize("hasRole('USER')")
    @GetMapping("{id}")
    public ResponseEntity<MatchText> getMatchtextById(@PathVariable  long id){
        MatchText matchText = matchTextRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Match Text not exist with id:" + id));
        return ResponseEntity.ok(matchText);
    }



}
