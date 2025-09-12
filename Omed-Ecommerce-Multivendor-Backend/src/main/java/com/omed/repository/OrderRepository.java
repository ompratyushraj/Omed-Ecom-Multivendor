package com.omed.repository;

import com.omed.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUser_UserId(Long userId);
    List<Order> findBySellerId(Long sellerId);
}
