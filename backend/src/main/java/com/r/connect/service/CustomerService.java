package com.r.connect.service;

import com.r.connect.entity.Account;
import com.r.connect.entity.Customer;
import com.r.connect.repository.AccountRepository;
import com.r.connect.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class CustomerService {
    private final CustomerRepository customerRepository;
    private final AccountRepository accountRepository;
    private final EntityManager entityManager;

    public CustomerService(CustomerRepository customerRepository, AccountRepository accountRepository, EntityManager entityManager) {
        this.customerRepository = customerRepository;
        this.accountRepository = accountRepository;
        this.entityManager = entityManager;
    }

    public void deleteAccountFromCustomer(Long accountId) {
        accountRepository.deleteById(accountId);
    }


    public Customer addAccountToCustomer(Long customerId, Account account) {
        account.setId(null);

        Optional<Customer> customer = customerRepository.findById((customerId));
        return customer.map(c -> {
            c.addAccount(account);
            customerRepository.save(c);
            return c;
        }).orElseThrow(() -> new NoSuchElementException("Customer with id " + customerId + " not found :("));
    }

    public Customer addCustomer(Customer customer) {
        customer.setId(null);
        return this.customerRepository.save(customer);
    }

    @Transactional
    public Customer editCustomer(Customer customer) {
        Customer cust = customerRepository.findById(customer.getId()).orElseThrow(() -> new NoSuchElementException("Customer with id " + customer.getId() + " not found :("));
        return entityManager.merge(cust);
    }

    public List<Customer> getCustomers() {
        return this.customerRepository.findAll();
    }

    public Customer getCustomerById(Long id) {
        return this.customerRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Customer with id " + id + " not found! :("));
    }

    public void deleteCustomer(Long id) {
        this.customerRepository.deleteById(id);
    }
}
