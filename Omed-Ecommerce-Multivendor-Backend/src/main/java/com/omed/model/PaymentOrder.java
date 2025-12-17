package com.omed.model;

import com.omed.domain.PaymentMethod;
import com.omed.domain.PaymentOrderStatus;
import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@EqualsAndHashCode
@Entity
public class PaymentOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long paymentOrderTableId;

    private Long amount;

    @Enumerated(EnumType.STRING)
    private PaymentOrderStatus status = PaymentOrderStatus.PENDING;

    @Enumerated(EnumType.STRING)
    private PaymentMethod paymentMethod;

    private String paymentLinkId;

    @ManyToOne
    private User user;

    @OneToMany
    private Set<Order> orders = new HashSet<>();

//    @OneToMany
//    @JoinTable(name = "payment_order_orders", joinColumns = @JoinColumn(name = "payment_order_id"), inverseJoinColumns = @JoinColumn(name = "order_id"))
//    private Set<Order> orders = new HashSet<>();

    public PaymentOrder() {}

    public PaymentOrder(Long paymentOrderTableId, Long amount, PaymentOrderStatus status, PaymentMethod paymentMethod, String paymentLinkId, User user, Set<Order> orders) {
        this.paymentOrderTableId = paymentOrderTableId;
        this.amount = amount;
        this.status = status;
        this.paymentMethod = paymentMethod;
        this.paymentLinkId = paymentLinkId;
        this.user = user;
        this.orders = orders;
    }

    public Long getPaymentOrderTableId() {
        return paymentOrderTableId;
    }

    public void setPaymentOrderTableId(Long paymentOrderTableId) {
        this.paymentOrderTableId = paymentOrderTableId;
    }

    public Long getAmount() {
        return amount;
    }

    public void setAmount(Long amount) {
        this.amount = amount;
    }

    public PaymentOrderStatus getStatus() {
        return status;
    }

    public void setStatus(PaymentOrderStatus status) {
        this.status = status;
    }

    public PaymentMethod getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(PaymentMethod paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public String getPaymentLinkId() {
        return paymentLinkId;
    }

    public void setPaymentLinkId(String paymentLinkId) {
        this.paymentLinkId = paymentLinkId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<Order> getOrders() {
        return orders;
    }

    public void setOrders(Set<Order> orders) {
        this.orders = orders;
    }
}