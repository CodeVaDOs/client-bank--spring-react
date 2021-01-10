package com.r.connect.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@SuppressWarnings("ID")
@MappedSuperclass
public abstract class AbstractEntity<E> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    private Long id;
}
