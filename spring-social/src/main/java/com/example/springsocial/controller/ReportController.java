package com.example.springsocial.controller;


import com.example.springsocial.exception.ResourceNotFoundExceptionNew;
import com.example.springsocial.model.Report;
import com.example.springsocial.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reports")
public class ReportController {

    @Autowired
    private ReportRepository reportRepository;

    @PreAuthorize("hasRole('USER')")
    @GetMapping
    public List<Report> getAllProblems(){
        return reportRepository.findAll();
    }

    // build create problem REST API
    @PreAuthorize("hasRole('USER')")
    @PostMapping()
    public Report createProblem(@RequestBody Report report) {

        return reportRepository.save(report);
    }

    // build get problem by id REST API
    @PreAuthorize("hasRole('USER')")
    @GetMapping("{id}")
    public ResponseEntity<Report> getProblemById(@PathVariable  long id){
        Report report = reportRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Problem not exist with id:" + id));
        return ResponseEntity.ok(report);
    }

    // build update problem REST API
    @PreAuthorize("hasRole('USER')")
    @PutMapping("{id}")
    public ResponseEntity<Report> updateProblem(@PathVariable long id, @RequestBody Report reportDetails) {
        Report updateReport = reportRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Problem not exist with id: " + id));

        updateReport.setName(reportDetails.getName());
        updateReport.setEmail(reportDetails.getEmail());
        updateReport.setSubject(reportDetails.getSubject());
        updateReport.setProblem(reportDetails.getProblem());

        reportRepository.save(updateReport);

        return ResponseEntity.ok(updateReport);
    }


}
