package com.example.springsocial.repository;

import com.example.springsocial.model.ShortFile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShortFileRepository extends JpaRepository<ShortFile, Long> {
    //  represents repository that provides all CRUD (create, read, update, delete) database methods

}