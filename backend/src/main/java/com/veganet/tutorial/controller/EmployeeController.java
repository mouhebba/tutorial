package com.veganet.tutorial.controller;

import com.easylink.models.Employee;
import com.veganet.tutorial.service.impl.EmployeeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class EmployeeController {

    @Autowired
    private EmployeeServiceImpl employeeService;

    @RequestMapping("/")
    public String home(){
        return "Hello World!";
    }

    @GetMapping("/list")
    public Iterable<Employee> list() {
        return employeeService.list();
    }

    @GetMapping("/find/{id}")
    public Optional<Employee> findById(@PathVariable("id") Integer id) {
        return employeeService.findById(id);
    }

    @PostMapping("/create")
    public String create(@RequestBody Employee employee) {
        employeeService.create(employee);
        return "Employer créé avec succès.";
    }

    @PostMapping("/update/{id}")
    public String update(@PathVariable("id") Integer id, @RequestBody Employee employee, BindingResult result) {
        employeeService.update(id, employee, result);
        return "Employer modifié avec succès.";
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Integer id) {
        employeeService.delete(id);
        return "Employer ID : " + id + " a été supprimé.";
    }

    @GetMapping("/find/{dateDeb}/{dateFin}")
    public List<Employee> findByDateBetween(@PathVariable("dateDeb") @DateTimeFormat(pattern = "yyyy-MM-dd") Date dateDeb,
                                            @PathVariable("dateFin") @DateTimeFormat(pattern = "yyyy-MM-dd") Date dateFin) {
        return employeeService.findByDateBetween(dateDeb, dateFin);
    }
}
