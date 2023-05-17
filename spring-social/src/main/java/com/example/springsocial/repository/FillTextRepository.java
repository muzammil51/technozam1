package com.example.springsocial.repository;

import com.example.springsocial.model.FillText;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FillTextRepository extends JpaRepository<FillText, Long> {
    //  represents repository that provides all CRUD (create, read, update, delete) database methods

}