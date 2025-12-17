package com.omed.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Product {

    // Primary key
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    // Basic product info
    @Column(nullable = false)
    private String productTitle;

    private String productComposition;
    private String description;
    private String packType;
    private String hsn;
    private String batch;
    private String brand; // manufacturer
    private String colour;
    private String sizes;

    // Pricing & stock
    private int mrpPrice;
    private int sellingPrice;
    private int discountPercent;
    private int stockQuantity;

    // Number of ratings
    private int numRatings;

    // Creation timestamp
    private LocalDateTime createdAt;

    // Relations
    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @ManyToOne
    @JoinColumn(name = "seller_id", nullable = false)
    private Seller seller;

    // Images stored in separate table
    @ElementCollection
    @CollectionTable(name = "product_images", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "image_url")
    private List<String> images = new ArrayList<>();

    // Reviews mapped from Review.product
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> reviews = new ArrayList<>();

    // ------------------- Constructors -------------------

    public Product() {
    }

    public Product(Long productId, String productTitle, String productComposition, String description,
                   String packType, String hsn, String batch, String brand, String colour, String sizes,
                   int mrpPrice, int sellingPrice, int discountPercent, int stockQuantity, int numRatings,
                   LocalDateTime createdAt, Category category, Seller seller, List<String> images, List<Review> reviews) {
        this.productId = productId;
        this.productTitle = productTitle;
        this.productComposition = productComposition;
        this.description = description;
        this.packType = packType;
        this.hsn = hsn;
        this.batch = batch;
        this.brand = brand;
        this.colour = colour;
        this.sizes = sizes;
        this.mrpPrice = mrpPrice;
        this.sellingPrice = sellingPrice;
        this.discountPercent = discountPercent;
        this.stockQuantity = stockQuantity;
        this.numRatings = numRatings;
        this.createdAt = createdAt;
        this.category = category;
        this.seller = seller;
        this.images = images;
        this.reviews = reviews;
    }

    // ------------------- Getters and Setters -------------------

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getProductTitle() {
        return productTitle;
    }

    public void setProductTitle(String productTitle) {
        this.productTitle = productTitle;
    }

    public String getProductComposition() {
        return productComposition;
    }

    public void setProductComposition(String productComposition) {
        this.productComposition = productComposition;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPackType() {
        return packType;
    }

    public void setPackType(String packType) {
        this.packType = packType;
    }

    public String getHsn() {
        return hsn;
    }

    public void setHsn(String hsn) {
        this.hsn = hsn;
    }

    public String getBatch() {
        return batch;
    }

    public void setBatch(String batch) {
        this.batch = batch;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getColour() {
        return colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public String getSizes() {
        return sizes;
    }

    public void setSizes(String sizes) {
        this.sizes = sizes;
    }

    public int getMrpPrice() {
        return mrpPrice;
    }

    public void setMrpPrice(int mrpPrice) {
        this.mrpPrice = mrpPrice;
    }

    public int getSellingPrice() {
        return sellingPrice;
    }

    public void setSellingPrice(int sellingPrice) {
        this.sellingPrice = sellingPrice;
    }

    public int getDiscountPercent() {
        return discountPercent;
    }

    public void setDiscountPercent(int discountPercent) {
        this.discountPercent = discountPercent;
    }

    public int getStockQuantity() {
        return stockQuantity;
    }

    public void setStockQuantity(int stockQuantity) {
        this.stockQuantity = stockQuantity;
    }

    public int getNumRatings() {
        return numRatings;
    }

    public void setNumRatings(int numRatings) {
        this.numRatings = numRatings;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Seller getSeller() {
        return seller;
    }

    public void setSeller(Seller seller) {
        this.seller = seller;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }
}
