package com.example.springsocial.repository;

import com.example.springsocial.model.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportRepository extends JpaRepository<Report, Long> {
    //  represents repository that provides all CRUD (create, read, update, delete) database methods

    // all crud database methods
}


