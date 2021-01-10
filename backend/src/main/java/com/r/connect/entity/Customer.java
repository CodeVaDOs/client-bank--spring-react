package com.r.connect.entity;

import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@SuppressWarnings("ID")
@Entity
@Data
@EqualsAndHashCode(callSuper = true)
@Table(name="customer")
public class Customer extends AbstractEntity<Customer> {
    String name;
    String email;
    Integer age;

    @OneToMany(fetch=FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "customer")
    private Set<Account> accounts = new HashSet<>();

    @ManyToMany(fetch=FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JoinTable(name = "employers_to_customers",
            joinColumns = @JoinColumn(name = "customer_id"),
            inverseJoinColumns = @JoinColumn(name = "employer_id"))
    private Set<Employer> employers = new HashSet<>();

    public void addAccount(Account account) {
        accounts.add(account);
        account.setCustomer(this);
    }

    public void removeAccount(Account account) {
        accounts.remove(account);
        account.setCustomer(null);
    }

    public void removeAccountById(Long accountId) {
        accounts.removeIf(acc -> acc.getId().equals(accountId));
    }
}
