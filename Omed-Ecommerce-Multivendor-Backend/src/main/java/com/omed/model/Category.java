package com.omed.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

@Entity
public class Category {

    // Primary key (auto-generated)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoryTableId;

    // Display name of the category
    private String name;

    // Unique identifier used in business logic
    @NotNull
    @Column(unique = true)
    private String categoryId;

    // For hierarchical structure (self-referencing)
    @ManyToOne
    private Category parentCategory;

    // Depth level of the category (e.g., 0 for root, 1 for child, etc.)
    @NotNull
    private Integer level;

    // ------------------- Constructors -------------------

    public Category() {
    }

    public Category(Long categoryTableId, String name, String categoryId, Category parentCategory, Integer level) {
        this.categoryTableId = categoryTableId;
        this.name = name;
        this.categoryId = categoryId;
        this.parentCategory = parentCategory;
        this.level = level;
    }

    // ------------------- Getters and Setters -------------------

    public Long getCategoryTableId() {
        return categoryTableId;
    }

    public void setCategoryTableId(Long categoryTableId) {
        this.categoryTableId = categoryTableId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(String categoryId) {
        this.categoryId = categoryId;
    }

    public Category getParentCategory() {
        return parentCategory;
    }

    public void setParentCategory(Category parentCategory) {
        this.parentCategory = parentCategory;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }
}