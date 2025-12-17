package com.omed.service;

import com.omed.model.HomeCategory;

import java.util.List;

public interface HomeCategoryService {
    HomeCategory createHomeCategory(HomeCategory homeCategory);
    List<HomeCategory> createCategories(List<HomeCategory> homeCategories);
    HomeCategory updateHomeCategory(HomeCategory homeCategory, Long homeCategoryId) throws Exception;
    List<HomeCategory> getAllHomeCategories();
}
