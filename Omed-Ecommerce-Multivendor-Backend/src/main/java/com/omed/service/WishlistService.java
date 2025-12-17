package com.omed.service;

import com.omed.model.Product;
import com.omed.model.User;
import com.omed.model.Wishlist;

public interface WishlistService {
    Wishlist createWishlist(User user);
    Wishlist getWishlistByUserId(User user);
    Wishlist addProductToWishlist(User user, Product product);
}
