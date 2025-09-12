package com.omed.service;

import com.omed.domain.OrderStatus;
import com.omed.model.*;

import java.util.List;
import java.util.Set;

public interface OrderService {
    Set<Order> createOrder(User user, Address shippingAddress, Cart cart);
    Order findOrderByOrderTableId(Long orderTableId) throws Exception;
    List<Order> usersOrderHistory(Long userId);
    List<Order> sellersOrder(Long sellerId);
    Order updateOrderStatus(Long orderTableId, OrderStatus orderStatus) throws Exception;
    Order cancelOrder(Long orderTableId, User user) throws Exception;
    OrderItem getOrderItemByOrderItemId(Long orderItemId) throws Exception;
}
