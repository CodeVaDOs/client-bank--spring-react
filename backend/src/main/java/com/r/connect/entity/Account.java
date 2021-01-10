package com.r.connect.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.r.connect.enumeration.Currency;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;

@SuppressWarnings("ID")
@Entity
@Data
@EqualsAndHashCode(exclude = {"customer"}, callSuper = false)
@ToString(exclude = {"customer"})
@Table(name = "account")
public class Account extends AbstractEntity<Account> {

    @Column(unique = true)
    private String number;

    private Currency currency;

    private Double balance = 0d;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.REMOVE})
    @JoinTable(name = "accounts_to_customer",
            joinColumns = @JoinColumn(name = "account_id"),
            inverseJoinColumns = @JoinColumn(name = "customer_id"))
    private Customer customer;
}