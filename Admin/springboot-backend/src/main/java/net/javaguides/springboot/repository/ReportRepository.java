package net.javaguides.springboot.repository;


import net.javaguides.springboot.model.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportRepository extends JpaRepository<Report, Long> {
    // all crud database methods
}


