package com.omed.service.Impl;

import com.omed.model.HomeCategory;
import com.omed.repository.HomeCategoryRespository;
import com.omed.service.HomeCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HomeCategoryImpl implements HomeCategoryService {
    private final HomeCategoryRespository homeCategoryRespository;

    public HomeCategoryImpl(HomeCategoryRespository homeCategoryRespository) {
        this.homeCategoryRespository = homeCategoryRespository;
    }

    @Override
    public HomeCategory createHomeCategory(HomeCategory homeCategory) {
        return homeCategoryRespository.save(homeCategory);
    }

    @Override
    public List<HomeCategory> createCategories(List<HomeCategory> homeCategories) {
        if(homeCategoryRespository.findAll().isEmpty()){
            return homeCategoryRespository.saveAll(homeCategories);
        }
        return homeCategoryRespository.findAll();
    }

    @Override
    public HomeCategory updateHomeCategory(HomeCategory homeCategory, Long homeCategoryId) throws Exception {
        HomeCategory existingCategory = homeCategoryRespository.findById(homeCategoryId).orElseThrow(()->new Exception("Category not found !"));
        if(homeCategory.getImage()!=null){
            existingCategory.setImage(homeCategory.getImage());
        }
        if(homeCategory.getCategoryId()!=null){
            existingCategory.setCategoryId(homeCategory.getCategoryId());
        }
        return homeCategoryRespository.save(existingCategory);
    }

    @Override
    public List<HomeCategory> getAllHomeCategories() {
        return homeCategoryRespository.findAll();
    }
}
