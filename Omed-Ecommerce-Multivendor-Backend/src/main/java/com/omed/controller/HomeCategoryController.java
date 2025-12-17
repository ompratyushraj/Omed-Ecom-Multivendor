package com.omed.controller;

import com.omed.model.Home;
import com.omed.model.HomeCategory;
import com.omed.service.HomeCategoryService;
import com.omed.service.HomeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HomeCategoryController {
    private final HomeCategoryService homeCategoryService;
    private final HomeService homeService;

    public HomeCategoryController(HomeCategoryService homeCategoryService, HomeService homeService) {
        this.homeCategoryService = homeCategoryService;
        this.homeService = homeService;
    }

    @PostMapping("/home/categories")
    public ResponseEntity<Home> createHomeCategories(@RequestBody List<HomeCategory> homeCategories){
        List<HomeCategory> categories = homeCategoryService.createCategories(homeCategories);
        Home home = homeService.createHomePageData(categories);
        return new ResponseEntity<>(home, HttpStatus.ACCEPTED);
    }

    @GetMapping("/admin/homeCategory")
    public ResponseEntity<List<HomeCategory>> getHomeCategory(){
        List<HomeCategory> categories = homeCategoryService.getAllHomeCategories();
        return ResponseEntity.ok(categories);
    }

    @PatchMapping("/admin/homeCategory/{homeCategoryId}")
    public ResponseEntity<HomeCategory> updateHomeCategory(@PathVariable Long homeCategoryId, @RequestBody HomeCategory homeCategory) throws Exception {
        HomeCategory updatedCategory = homeCategoryService.updateHomeCategory(homeCategory, homeCategoryId);
        return ResponseEntity.ok(updatedCategory);
    }
}
