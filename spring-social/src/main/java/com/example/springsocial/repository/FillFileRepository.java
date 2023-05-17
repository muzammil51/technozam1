package com.example.springsocial.repository;

import com.example.springsocial.model.FillFile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FillFileRepository extends JpaRepository<FillFile, Long> {
    //  represents repository that provides all CRUD (create, read, update, delete) database methods

}