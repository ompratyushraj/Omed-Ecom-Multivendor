package com.omed.request;

import java.util.List;

public class CreateReviewRequest {
    private String reviewText;
    private double reviewRating;
    private List<String> productImgages;

    public String getReviewText() {
        return reviewText;
    }

    public void setReviewText(String reviewText) {
        this.reviewText = reviewText;
    }

    public double getReviewRating() {
        return reviewRating;
    }

    public void setReviewRating(double reviewRating) {
        this.reviewRating = reviewRating;
    }

    public List<String> getProductImgages() {
        return productImgages;
    }

    public void setProductImgages(List<String> productImgages) {
        this.productImgages = productImgages;
    }
}

