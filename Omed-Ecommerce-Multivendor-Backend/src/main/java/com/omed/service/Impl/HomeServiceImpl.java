package com.omed.service.Impl;

import com.omed.domain.HomeCategorySection;
import com.omed.model.Deal;
import com.omed.model.Home;
import com.omed.model.HomeCategory;
import com.omed.repository.DealRepository;
import com.omed.service.HomeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class HomeServiceImpl implements HomeService {

    private final DealRepository dealRepository;

    public HomeServiceImpl(DealRepository dealRepository) {
        this.dealRepository = dealRepository;
    }

    @Override
    public Home createHomePageData(List<HomeCategory> allCategories) {

        List<HomeCategory> gridCategories = allCategories.stream().filter(homeCategory -> homeCategory.getSection() == HomeCategorySection.GRID).collect(Collectors.toList());

        List<HomeCategory> shopByCategories = allCategories.stream().filter(homeCategory -> homeCategory.getSection() == HomeCategorySection.SHOP_BY_CATEGORIES).collect(Collectors.toList());

        List<HomeCategory> foodItemCategories = allCategories.stream().filter(homeCategory -> homeCategory.getSection() == HomeCategorySection.MEDICAL_CATEGORIES).collect(Collectors.toList());

        List<HomeCategory> medicalCategories = allCategories.stream().filter(homeCategory -> homeCategory.getSection() == HomeCategorySection.FOOD_ITEM_CATEGORIES).collect(Collectors.toList());

        List<HomeCategory> dealCategories = allCategories.stream().filter(homeCategory -> homeCategory.getSection() == HomeCategorySection.DEALS).collect(Collectors.toList());

        List<Deal> createdDeals = new ArrayList<>();

        if(dealRepository.findAll().isEmpty()){
            List<Deal> deals = allCategories.stream()
                    .filter(homeCategory -> homeCategory.getSection() == HomeCategorySection.DEALS)
                    .map(category -> new Deal(null, 10, category))
                    .collect(Collectors.toList());
            createdDeals = dealRepository.saveAll(deals);
        }else{
            createdDeals = dealRepository.findAll();
        }

        Home home = new Home();
        home.setGrid(gridCategories);
        home.setShopByCategories(shopByCategories);
        home.setMedicalCategories(medicalCategories);
        home.setFoodItemCategories(foodItemCategories);
        home.setDeals(createdDeals);
        home.setDealCategories(dealCategories);

        return home;
    }
}
