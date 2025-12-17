package com.omed.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@EqualsAndHashCode
@Entity
public class Wishlist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long wishlistId;

    @OneToOne
    private User user;

    @ManyToMany
//    @JoinTable(
//            name = "wishlist_products", // name of the join table
//            joinColumns = @JoinColumn(name = "wishlist_id"), // foreign key to Wishlist
//            inverseJoinColumns = @JoinColumn(name = "product_id") // foreign key to Product
//    )
    private Set<Product> products = new HashSet<>();

    public Wishlist(){}

    public Wishlist(Long wishlistId, User user, Set<Product> products) {
        this.wishlistId = wishlistId;
        this.user = user;
        this.products = products;
    }

    public Long getWishlistId() {
        return wishlistId;
    }

    public void setWishlistId(Long wishlistId) {
        this.wishlistId = wishlistId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<Product> getProducts() {
        return products;
    }

    public void setProducts(Set<Product> products) {
        this.products = products;
    }
}