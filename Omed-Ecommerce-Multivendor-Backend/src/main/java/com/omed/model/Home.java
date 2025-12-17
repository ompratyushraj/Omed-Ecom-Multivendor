package com.omed.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Home {

    private List<HomeCategory> grid;
    private List<HomeCategory> shopByCategories;
    private List<HomeCategory> medicalCategories;
    private List<HomeCategory> foodItemCategories;
    private List<HomeCategory> dealCategories;

    private List<Deal> deals;

    public Home(){}

    public Home(List<HomeCategory> grid, List<HomeCategory> shopByCategories, List<HomeCategory> medicalCategories, List<HomeCategory> foodItemCategories, List<HomeCategory> dealCategories, List<Deal> deals) {
        this.grid = grid;
        this.shopByCategories = shopByCategories;
        this.medicalCategories = medicalCategories;
        this.foodItemCategories = foodItemCategories;
        this.dealCategories = dealCategories;
        this.deals = deals;
    }

    public List<HomeCategory> getGrid() {
        return grid;
    }

    public void setGrid(List<HomeCategory> grid) {
        this.grid = grid;
    }

    public List<HomeCategory> getShopByCategories() {
        return shopByCategories;
    }

    public void setShopByCategories(List<HomeCategory> shopByCategories) {
        this.shopByCategories = shopByCategories;
    }

    public List<HomeCategory> getMedicalCategories() {
        return medicalCategories;
    }

    public void setMedicalCategories(List<HomeCategory> medicalCategories) {
        this.medicalCategories = medicalCategories;
    }

    public List<HomeCategory> getFoodItemCategories() {
        return foodItemCategories;
    }

    public void setFoodItemCategories(List<HomeCategory> foodItemCategories) {
        this.foodItemCategories = foodItemCategories;
    }

    public List<HomeCategory> getDealCategories() {
        return dealCategories;
    }

    public void setDealCategories(List<HomeCategory> dealCategories) {
        this.dealCategories = dealCategories;
    }

    public List<Deal> getDeals() {
        return deals;
    }

    public void setDeals(List<Deal> deals) {
        this.deals = deals;
    }
}