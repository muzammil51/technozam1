package com.example.springsocial.controller;

// Spring REST controller which map HTTP requests to the /reports endpoint.
// getAllProblems() retrieves all Problem objects from the database,
// getProblemsById() retrieves a specific Problem object by its ID.
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

    // get all problems
    @PreAuthorize("hasRole('USER')")
    @GetMapping
    public List<Report> getAllProblems(){
        return reportRepository.findAll();
    }

    // create problem REST API
    @PreAuthorize("hasRole('USER')")
    @PostMapping()
    public Report createProblem(@RequestBody Report report) {
        return reportRepository.save(report);
    }

    // get problem by id REST API
    @PreAuthorize("hasRole('USER')")
    @GetMapping("{id}")
    public ResponseEntity<Report> getProblemById(@PathVariable  long id){
        Report report = reportRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Problem not exist with id:" + id));
        return ResponseEntity.ok(report);
    }

    // update problem REST API
    @PreAuthorize("hasRole('USER')")
    @PutMapping("{id}")
    public ResponseEntity<Report> updateProblem(@PathVariable long id, @RequestBody Report reportDetails) {
        // get the problem by id or throw an exception if it doesn't exist
        Report updateReport = reportRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundExceptionNew("Problem not exist with id: " + id));

        // update the problem details
        updateReport.setName(reportDetails.getName());
        updateReport.setEmail(reportDetails.getEmail());
        updateReport.setSubject(reportDetails.getSubject());
        updateReport.setProblem(reportDetails.getProblem());

        // save the updated problem to the repository
        reportRepository.save(updateReport);

        // return the updated problem in the response body
        return ResponseEntity.ok(updateReport);
    }


}
