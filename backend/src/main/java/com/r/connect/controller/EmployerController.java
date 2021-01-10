package com.r.connect.controller;

import com.r.connect.entity.Employer;
import com.r.connect.service.EmployerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/employer")
public class EmployerController {
    private final EmployerService service;

    public EmployerController(EmployerService service) {
        this.service = service;
    }

    @GetMapping
    public List<Employer> getAll() {
        return service.getAll();
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
