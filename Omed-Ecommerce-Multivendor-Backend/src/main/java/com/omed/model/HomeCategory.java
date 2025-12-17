package com.omed.model;

import com.omed.domain.HomeCategorySection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Getter
@Setter
@EqualsAndHashCode
public class HomeCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long homeCategoryId;

    private String name;
    private String image;
    private String categoryId;
    private HomeCategorySection section;

    public HomeCategory(){}
    public HomeCategory(Long homeCategoryId, String name, String image, String categoryId, HomeCategorySection section) {
        this.homeCategoryId = homeCategoryId;
        this.name = name;
        this.image = image;
        this.categoryId = categoryId;
        this.section = section;
    }

    public Long getHomeCategoryId() {
        return homeCategoryId;
    }

    public void setHomeCategoryId(Long homeCategoryId) {
        this.homeCategoryId = homeCategoryId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(String categoryId) {
        this.categoryId = categoryId;
    }

    public HomeCategorySection getSection() {
        return section;
    }

    public void setSection(HomeCategorySection section) {
        this.section = section;
    }
}