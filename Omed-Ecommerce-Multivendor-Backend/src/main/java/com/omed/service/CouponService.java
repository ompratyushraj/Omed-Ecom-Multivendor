package com.omed.service;

import com.omed.model.Cart;
import com.omed.model.Coupon;
import com.omed.model.User;

import java.util.List;

public interface CouponService {
    Cart applyCoupon(String code, double orderValue, User user) throws Exception;
    Cart removeCoupon(String code, User user) throws Exception;
    Coupon findCouponById(Long couponId) throws Exception; // clear naming
    Coupon createCoupon(Coupon coupon);
    List<Coupon> findAllCoupons();
    void deleteCoupon(Long couponId) throws Exception; // not userId
}

