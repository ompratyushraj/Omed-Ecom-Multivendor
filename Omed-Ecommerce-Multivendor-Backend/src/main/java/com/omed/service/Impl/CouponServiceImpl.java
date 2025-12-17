package com.omed.service.Impl;

import com.omed.model.Cart;
import com.omed.model.Coupon;
import com.omed.model.User;
import com.omed.repository.CartRepository;
import com.omed.repository.CouponRepository;
import com.omed.repository.UserRepository;
import com.omed.service.CouponService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class CouponServiceImpl implements CouponService {

    private final CouponRepository couponRepository;
    private final CartRepository cartRepository;
    private final UserRepository userRepository;

    public CouponServiceImpl(CouponRepository couponRepository, CartRepository cartRepository, UserRepository userRepository) {
        this.couponRepository = couponRepository;
        this.cartRepository = cartRepository;
        this.userRepository = userRepository;
    }

    @Override
    public Cart applyCoupon(String code, double orderValue, User user) throws Exception {
        Coupon coupon = couponRepository.findByCode(code);
        Cart cart = cartRepository.findByUser_UserId(user.getUserId());
        if(coupon==null){
            throw new Exception("Coupon not valid !");
        }
        if(user.getUsedCoupons().contains(coupon)){
            throw new Exception("Coupon already used !");
        }
        if(orderValue<coupon.getMinimumOrderValue()){
            throw new Exception("Coupon order less than minimum order value !");
        }
        if(coupon.isActive() && LocalDate.now().isAfter(coupon.getValidityStartDate()) && LocalDate.now().isBefore(coupon.getValidityEndDate())){
            user.getUsedCoupons().add(coupon);
            userRepository.save(user);

            double discountedPrice =( cart.getTotalSellingPrice()*coupon.getDiscountPercentage() )/100;

            cart.setTotalSellingPrice(cart.getTotalSellingPrice()-discountedPrice);
            cart.setCouponCode(code);
            cartRepository.save(cart);
            return cart;
        }
        throw new Exception("Coupon not valid !");
    }

    @Override
    public Cart removeCoupon(String code, User user) throws Exception {
        Coupon coupon = couponRepository.findByCode(code);
        if(coupon == null){
            throw new Exception("Coupon not found !");
        }
        Cart cart = cartRepository.findByUser_UserId(user.getUserId());
        double discountedPrice = ( cart.getTotalSellingPrice()*coupon.getDiscountPercentage())/100;
        cart.setTotalSellingPrice(cart.getTotalSellingPrice()*discountedPrice);
        cart.setCouponCode(null);
        return cartRepository.save(cart);
    }

    @Override
    public Coupon findCouponById(Long couponId) throws Exception {
        return couponRepository.findById(couponId).orElseThrow(()->new Exception("Coupon not found !"));
    }

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public Coupon createCoupon(Coupon coupon) {
        return couponRepository.save(coupon);
    }

    @Override
    public List<Coupon> findAllCoupons() {
        return couponRepository.findAll();
    }

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteCoupon(Long couponId) throws Exception {
        findCouponById(couponId);
        couponRepository.deleteById(couponId);
    }
}
