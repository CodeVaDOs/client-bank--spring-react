package com.r.connect.controller;

import com.r.connect.entity.Account;
import com.r.connect.entity.Customer;
import com.r.connect.service.CustomerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin
@RestController
@RequestMapping("api/customer")
public class CustomerController {
    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping
    public List<Customer> getCustomers() {
        return customerService.getCustomers();
    }

    @GetMapping("{id}")
    public Customer getCustomerById(@PathVariable("id") Long customerId) {
        return customerService.getCustomerById(customerId);
    }

    @PostMapping
    public Customer addCustomer(@RequestBody Customer customer) {
        return customerService.addCustomer(customer);
    }

    @PostMapping("{id}/account")
    public Customer addAccountToCustomer(@PathVariable("id") Long customerId, @RequestBody Account account) {
        return customerService.addAccountToCustomer(customerId, account);
    }

    @PutMapping
    public Customer editCustomer(@RequestBody Customer customer) {
        return customerService.editCustomer(customer);
    }

    @DeleteMapping("account/{accountId}")
    public void deleteAccount(@PathVariable("accountId") Long accountId) {
        customerService.deleteAccountFromCustomer(accountId);
    }

    @DeleteMapping("{id}")
    public void deleteCustomerById(@PathVariable("id") Long id) {
        customerService.deleteCustomer(id);
    }
}