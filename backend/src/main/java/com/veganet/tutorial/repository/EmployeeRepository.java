package com.veganet.tutorial.repository;

import com.easylink.models.Employee;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;

public interface EmployeeRepository extends CrudRepository<Employee, Integer> {
    public List<Employee> findByDateCreationBetween(Date dateDeb, Date dateFin);
}
