package com.omed.repository;

import com.omed.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
//    Cart findByUserId(Long userId);
    Cart findByUser_UserId(Long userId);
}
