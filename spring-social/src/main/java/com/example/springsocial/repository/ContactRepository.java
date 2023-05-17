package com.example.springsocial.repository;

import com.example.springsocial.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
    //  represents repository that provides all CRUD (create, read, update, delete) database methods
}


