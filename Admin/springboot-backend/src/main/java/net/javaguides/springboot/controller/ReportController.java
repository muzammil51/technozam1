package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Report;
import net.javaguides.springboot.model.User;
import net.javaguides.springboot.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/reports")
public class ReportController {

    @Autowired
    private ReportRepository reportRepository;

    @GetMapping
    public List<Report> getAllProblems(){
        return reportRepository.findAll();
    }

    // build create problem REST API
    @PostMapping()
    public Report createProblem(@RequestBody Report report) {

        return reportRepository.save(report);
    }

    // build get problem by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Report> getProblemById(@PathVariable  long id){
        Report report = reportRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Problem not exist with id:" + id));
        return ResponseEntity.ok(report);
    }

    // build delete User REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteProblem(@PathVariable long id){

        Report report = reportRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Report not exist with id: " + id));

        reportRepository.delete(report);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

}
