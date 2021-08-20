package com.veganet.tutorial.service.impl;

import com.easylink.models.Employee;
import com.veganet.tutorial.repository.EmployeeRepository;
import com.veganet.tutorial.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    EmployeeRepository repository;

    @Override
    public void create(Employee employee) {
        repository.save(employee);
    }

    @Override
    public void delete(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public void update(@PathVariable("id") Integer id, @RequestBody Employee employee, BindingResult result) {
        if (result.hasErrors()) {
            employee.setId(id);
            return;
        }

        repository.save(employee);
    }

    @Override
    public Optional<Employee> findById(@PathVariable("id") Integer id) {
        return repository.findById(id);
    }

    @Override
    public Iterable<Employee> list() {
        return repository.findAll();
    }

    @Override
    public List<Employee> findByDateBetween(Date dateDeb, Date dateFin) {
        return repository.findByDateCreationBetween(dateDeb, dateFin);
    }
}
