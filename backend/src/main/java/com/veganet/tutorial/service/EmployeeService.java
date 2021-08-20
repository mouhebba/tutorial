package com.veganet.tutorial.service;

import com.easylink.models.Employee;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface EmployeeService {
    public void create(Employee employee);
    public void delete(Integer id);
    public void update(@PathVariable("id") Integer id, @RequestBody Employee employee, BindingResult result);
    public Iterable<Employee> list();
    public Optional<Employee> findById(@PathVariable("id") Integer id);
    public List<Employee> findByDateBetween(Date dateDeb, Date dateFin);
}
