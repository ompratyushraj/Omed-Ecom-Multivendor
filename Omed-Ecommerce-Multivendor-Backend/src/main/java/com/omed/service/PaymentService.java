package com.omed.service;

import com.omed.model.Order;
import com.omed.model.PaymentOrder;
import com.omed.model.User;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayException;
import com.stripe.exception.StripeException;

import java.util.Set;

public interface PaymentService {

    PaymentOrder createOrder(User user, Set<Order> orders);
//    PaymentOrder createPaymentOrder(User user, Set<Order> orders);

    PaymentOrder getPaymentOrderById(Long orderId) throws Exception; // <- By CodeByZosh
//    PaymentOrder getPaymentOrderById(Long paymentOrderTableId); // <- ChatGpt

    PaymentOrder getPaymentOrderByPaymentId(String orderId) throws Exception; // <- By CodeByZosh
//    PaymentOrder getPaymentOrderByPaymentLinkId(String paymentLinkId); // <-ChatGpt


    Boolean proceedPaymentOrder(PaymentOrder paymentOrder,
                                String paymentId,
                                String paymentLinkId) throws RazorpayException;
    PaymentLink createRazorpayPaymentLink(User user, Long amount, Long orderId) throws RazorpayException;
    String createStripePaymentLink(User user, Long amount, Long orderId) throws StripeException;
}
