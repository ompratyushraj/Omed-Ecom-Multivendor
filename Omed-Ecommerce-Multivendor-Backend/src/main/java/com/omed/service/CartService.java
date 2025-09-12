package com.omed.service;

import com.omed.model.Cart;
import com.omed.model.CartItem;
import com.omed.model.Product;
import com.omed.model.User;

public interface CartService {
    public CartItem addCartItem(
            User user,
            Product product,
            String sizes,
            int quantity
    );

    public Cart findUserCart(User user);
}
