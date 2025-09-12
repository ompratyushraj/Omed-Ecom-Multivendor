package com.omed.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class CreateProductRequest {

    @JsonProperty("productTitle")
    private String productTitle;

    @JsonProperty("productComposition")
    private String productComposition;

    @JsonProperty("category1")
    private String category1;

    @JsonProperty("category2")
    private String category2;

    @JsonProperty("category3")
    private String category3;

    @JsonProperty("description")
    private String description;

    @JsonProperty("packType")
    private String packType;

    @JsonProperty("hsn")
    private String hsn;

    @JsonProperty("batch")
    private String batch;

    @JsonProperty("brand")
    private String brand;

    @JsonProperty("mrpPrice")
    private int mrpPrice;

    @JsonProperty("sellingPrice")
    private int sellingPrice;

    @JsonProperty("stockQuantity")
    private int stockQuantity;

    @JsonProperty("colour")
    private String colour;

    @JsonProperty("images")
    private List<String> images;

    @JsonProperty("sizes")
    private String sizes;

    @JsonProperty("sellerId")
    private Long sellerId;

    // --- No-args Constructor ---

    public CreateProductRequest() {
    }

    // --- All-args Constructor ---

    public CreateProductRequest(String productTitle, String productComposition,
                                String category1, String category2, String category3,
                                String description, String packType, String hsn, String batch,
                                String brand, int mrpPrice, int sellingPrice, int stockQuantity,
                                String colour, List<String> images, String sizes, Long sellerId) {
        this.productTitle = productTitle;
        this.productComposition = productComposition;
        this.category1 = category1;
        this.category2 = category2;
        this.category3 = category3;
        this.description = description;
        this.packType = packType;
        this.hsn = hsn;
        this.batch = batch;
        this.brand = brand;
        this.mrpPrice = mrpPrice;
        this.sellingPrice = sellingPrice;
        this.stockQuantity = stockQuantity;
        this.colour = colour;
        this.images = images;
        this.sizes = sizes;
        this.sellerId = sellerId;
    }

    // --- Getters and Setters ---

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

    public String getCategory1() {
        return category1;
    }

    public void setCategory1(String category1) {
        this.category1 = category1;
    }

    public String getCategory2() {
        return category2;
    }

    public void setCategory2(String category2) {
        this.category2 = category2;
    }

    public String getCategory3() {
        return category3;
    }

    public void setCategory3(String category3) {
        this.category3 = category3;
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

    public int getStockQuantity() {
        return stockQuantity;
    }

    public void setStockQuantity(int stockQuantity) {
        this.stockQuantity = stockQuantity;
    }

    public String getColour() {
        return colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }

    public String getSizes() {
        return sizes;
    }

    public void setSizes(String sizes) {
        this.sizes = sizes;
    }

    public Long getSellerId() {
        return sellerId;
    }

    public void setSellerId(Long sellerId) {
        this.sellerId = sellerId;
    }
}
