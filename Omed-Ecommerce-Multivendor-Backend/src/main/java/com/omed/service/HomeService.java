package com.omed.service;

import com.omed.model.Home;
import com.omed.model.HomeCategory;

import java.util.List;

public interface HomeService {
    public Home createHomePageData(List<HomeCategory> allCategories);
}
