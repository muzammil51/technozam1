package com.example.springsocial.controller;

import com.example.springsocial.exception.ResourceNotFoundExceptionNew;
import com.example.springsocial.model.MatchFile;
import com.example.springsocial.model.ShortFile;
import com.example.springsocial.repository.MatchFileRepository;
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
@RequestMapping("/matchfiles")
public class MatchFileController {

    @Autowired
    private MatchFileRepository matchFileRepository;

    @PreAuthorize("hasRole('USER')")
    @GetMapping
    public List<MatchFile> getAllMatchfile(){
        return matchFileRepository.findAll();
    }


    // build get problem by id REST API
    @PreAuthorize("hasRole('USER')")
    @GetMapping("{id}")
    public ResponseEntity<MatchFile> getMatchfileById(@PathVariable  long id){
        MatchFile matchFile = matchFileRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Match file not exist with id:" + id));
        return ResponseEntity.ok(matchFile);
    }
}
