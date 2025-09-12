package com.omed.service.Impl;

import com.omed.domain.OrderStatus;
import com.omed.domain.PaymentStatus;
import com.omed.model.*;
import com.omed.repository.AddressRepository;
import com.omed.repository.OrderRepository;
import com.omed.service.OrderService;
import com.omed.repository.OrderItemRepository;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final AddressRepository addressRepository;
    private final OrderItemRepository orderItemRepository;

    // Constructor
    public OrderServiceImpl(OrderRepository orderRepository, AddressRepository addressRepository, OrderItemRepository orderItemRepository) {
        this.orderRepository = orderRepository;
        this.addressRepository = addressRepository;
        this.orderItemRepository = orderItemRepository;
    }

    @Override
    public Set<Order> createOrder(User user, Address shippingAddress, Cart cart) {
        if(!user.getAddress().contains(shippingAddress)){
            user.getAddress().add(shippingAddress);
        }
        Address address = addressRepository.save(shippingAddress);

        // Brand 1 => 4 Shirt
        // Brand 2 => 3 Pants
        // Brand 3 => 1 Watch

        Map<Long, List<CartItem>> itemsBySeller = cart.getCartItems().stream()
                .collect(Collectors.groupingBy(item -> item.getProduct().getSeller().getSellerId()));
        Set<Order> orders = new HashSet<>();
        for(Map.Entry<Long, List<CartItem>> entry:itemsBySeller.entrySet()){
            Long sellerId = entry.getKey();
            List<CartItem> items = entry.getValue();

            int totalOrderPrice = items.stream().mapToInt(
                    CartItem::getSellingPrice
            ).sum();
            int totalItem = items.stream().mapToInt(CartItem::getQuantity).sum();
            Order createdOrder = new Order();
            createdOrder.setUser(user);
            createdOrder.setSellerId(sellerId);
            createdOrder.setTotalMrpPrice(totalOrderPrice);
            createdOrder.setTotalSellingPrice(totalOrderPrice);
            createdOrder.setShippingAddress(address);
            createdOrder.setOrderStatus(OrderStatus.PENDING);
            createdOrder.getPaymentDetails().setStatus(PaymentStatus.PENDING);

            Order savedOrder = orderRepository.save(createdOrder);
            orders.add(savedOrder);

            List<OrderItem> orderItems = new ArrayList<>();
            for(CartItem item:items){
                OrderItem orderItem = new OrderItem();
                orderItem.setOrder(savedOrder);
                orderItem.setMrpPrice(item.getMrpPrice());
                orderItem.setProduct(item.getProduct());
                orderItem.setQuantity(item.getQuantity());
                orderItem.setSizes(item.getSizes());
                orderItem.setUserId(item.getUserId());
                orderItem.setSellingPrice(item.getSellingPrice());

                savedOrder.getOrderItems().add(orderItem);

                OrderItem savedOrderItem = orderItemRepository.save(orderItem);
                orderItems.add(savedOrderItem);
            }
        }

        return orders;
    }

    @Override
    public Order findOrderByOrderTableId(Long orderTableId) throws Exception {
        return orderRepository.findById(orderTableId).orElseThrow(()-> new Exception("Order Not Found !"));
    }

    @Override
    public List<Order> usersOrderHistory(Long userId) {
        return orderRepository.findByUser_UserId(userId);
    }

    @Override
    public List<Order> sellersOrder(Long sellerId) {
        return orderRepository.findBySellerId(sellerId);
    }

    @Override
    public Order updateOrderStatus(Long orderTableId, OrderStatus orderStatus) throws Exception {
        Order order = findOrderByOrderTableId(orderTableId);
        order.setOrderStatus(orderStatus);
        return orderRepository.save(order);
    }

    @Override
    public Order cancelOrder(Long orderTableId, User user) throws Exception {
        Order order = findOrderByOrderTableId(orderTableId);

        if(!user.getUserId().equals(order.getUser().getUserId())){
            throw new Exception("You don't have access to this order !");
        }

        order.setOrderStatus(OrderStatus.CANCELLED);
        return orderRepository.save(order);
    }

    @Override
    public OrderItem getOrderItemByOrderItemId(Long orderItemId) throws Exception {
        return orderItemRepository.findById(orderItemId).orElseThrow(()->new Exception("Order item not exist !"));
    }
}
