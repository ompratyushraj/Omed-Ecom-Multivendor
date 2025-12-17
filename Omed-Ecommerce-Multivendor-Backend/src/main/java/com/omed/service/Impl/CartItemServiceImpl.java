package com.omed.service.Impl;

import com.omed.model.CartItem;
import com.omed.model.User;
import com.omed.repository.CartItemRepository;
import com.omed.service.CartItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.expression.ExpressionException;
import org.springframework.stereotype.Service;

@Service
public class CartItemServiceImpl implements CartItemService {

    private final CartItemRepository cartItemRepository;

    public CartItemServiceImpl(CartItemRepository cartItemRepository) {
        this.cartItemRepository = cartItemRepository;
    }

    @Override
    public CartItem updateCartItem(Long userId, Long cartItemId, CartItem cartItem) throws Exception {
        CartItem item = findCartItemById(cartItemId);

        User cartItemUser = item.getCart().getUser();
        if(cartItemUser.getUserId().equals(userId)){
            item.setQuantity(cartItem.getQuantity());
            item.setMrpPrice(item.getQuantity()*item.getProduct().getMrpPrice());
            item.setSellingPrice(item.getQuantity()*item.getProduct().getSellingPrice());
            return cartItemRepository.save(item);
        }
        throw new Exception("You can't update this cartItem !");
    }

    @Override
    public void removeCartItem(Long userId, Long cartItemId) throws Exception {
        CartItem item = findCartItemById(cartItemId);

        User cartItemUser = item.getCart().getUser();

        if(cartItemUser.getUserId().equals(userId)){
            cartItemRepository.delete(item);
        }
        else throw new Exception("You ain't delete this item");
    }

    @Override
    public CartItem findCartItemById(Long cartItemId) throws Exception {
        return cartItemRepository.findById(cartItemId).orElseThrow(()-> new Exception("Cart item not found with id:" + cartItemId));
    }
}
