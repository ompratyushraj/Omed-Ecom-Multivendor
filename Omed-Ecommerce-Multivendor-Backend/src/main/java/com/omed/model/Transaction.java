package com.omed.model;


import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@EqualsAndHashCode
@Entity
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long transactionTableId;

    @ManyToOne
    private User customer;

    @OneToOne
    private Order order;

    @ManyToOne
    private Seller seller;

    private LocalDateTime date = LocalDateTime.now();

    public Transaction(){}

    public Transaction(Long transactionTableId, User customer, Order order, Seller seller, LocalDateTime date) {
        this.transactionTableId = transactionTableId;
        this.customer = customer;
        this.order = order;
        this.seller = seller;
        this.date = date;
    }

    public Long getTransactionTableId() {
        return transactionTableId;
    }

    public void setTransactionTableId(Long transactionTableId) {
        this.transactionTableId = transactionTableId;
    }

    public User getCustomer() {
        return customer;
    }

    public void setCustomer(User customer) {
        this.customer = customer;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Seller getSeller() {
        return seller;
    }

    public void setSeller(Seller seller) {
        this.seller = seller;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }
}