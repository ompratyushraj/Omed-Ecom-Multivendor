package com.omed.repository;

import com.omed.model.Cart;
import com.omed.model.CartItem;
import com.omed.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    CartItem findByCartAndProductAndSizes(Cart cart, Product product, String sizes);
}

