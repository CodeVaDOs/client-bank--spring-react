package com.r.connect.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@SuppressWarnings("ID")
@Data
@Entity
@EqualsAndHashCode(exclude = {"customers"}, callSuper = false)
@ToString(exclude = {"customers"})
@Table(name="employer")
public class Employer extends AbstractEntity<Employer> {
    String name;
    String address;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JoinTable(name = "employers_to_customers",
            joinColumns = @JoinColumn(name = "employer_id"),
            inverseJoinColumns = @JoinColumn(name = "customer_id"))
    private Set<Customer> customers = new HashSet<>();
}
