package com.omed.service.Impl;

import com.omed.model.Cart;
import com.omed.model.CartItem;
import com.omed.model.Product;
import com.omed.model.User;
import com.omed.repository.CartItemRepository;
import com.omed.repository.CartRepository;
import com.omed.service.CartService;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartService {

    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;

    // Constructor
    public CartServiceImpl(CartRepository cartRepository, CartItemRepository cartItemRepository) {
        this.cartRepository = cartRepository;
        this.cartItemRepository = cartItemRepository;
    }

    @Override
    public CartItem addCartItem(User user, Product product, String sizes, int quantity) {
        Cart cart = findUserCart(user);
        CartItem isPresent = cartItemRepository.findByCartAndProductAndSizes(cart, product, sizes);


        if(isPresent == null){
            CartItem cartItem = new CartItem();
            cartItem.setProduct(product);
            cartItem.setQuantity(quantity);
            cartItem.setQuantity(quantity);
            cartItem.setUserId(user.getUserId());
            cartItem.setSizes(sizes);

            int totalPrice = quantity* product.getSellingPrice();
            cartItem.setSellingPrice(totalPrice);
            cartItem.setMrpPrice(quantity*product.getMrpPrice());

            cart.getCartItems().add(cartItem);
            cartItem.setCart(cart);

            return cartItemRepository.save(cartItem);
        }

        return isPresent;
    }

    @Override
    public Cart findUserCart(User user) {
        Cart cart = cartRepository.findByUser_UserId(user.getUserId());

        int totalPrice = 0;
        int totalDiscountedPrice = 0;
        int totalItem = 0;

        for(CartItem cartItem: cart.getCartItems()){
            totalPrice += cartItem.getMrpPrice();
            totalDiscountedPrice += cartItem.getSellingPrice();
            totalItem += cartItem.getQuantity();
        }

        cart.setTotalMrpPrice(totalPrice);
        cart.setTotalItem(totalItem);
        cart.setTotalSellingPrice(totalDiscountedPrice);
        cart.setDiscount(calculateDiscountPercentage(totalPrice, totalDiscountedPrice));

        return cart;
    }

    private int calculateDiscountPercentage(int mrpPrice, int sellingPrice) {
        if (mrpPrice <= 0) {
//            throw new IllegalArgumentException("MRP must be greater than 0.");
            return 0;
        }
        double discount = mrpPrice - sellingPrice;
        double percent = (discount / mrpPrice) * 100;
        return (int) percent;
    }
}
