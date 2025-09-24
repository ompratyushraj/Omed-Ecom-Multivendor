//package com.omed.controller;
//
//import com.omed.model.Home;
//import com.omed.model.HomeCategory;
//import com.omed.service.HomeCategoryService;
//import com.omed.service.HomeService;
//import lombok.RequiredArgsConstructor;
//import org.apache.coyote.Response;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//
//@RestController
//@RequiredArgsConstructor
//public class CustomerController {
//    public final HomeCategoryService homeCategoryService;
//    private final HomeService homeService;
//
//    public CustomerController(HomeService homeService, HomeCategoryService homeCategoryService) {
//        this.homeService = homeService;
//        this.homeCategoryService = homeCategoryService;
//    }
//
//    @GetMapping("/homepage")
//    public ResponseEntity<Home> getHomePageData(){
////        Home homePageData = homeService.getHomePageData();
////        return new ResponseEntity<>(homePageData, HttpStatus.ACCEPTED);
//        return null;
//    }
//
//    @PostMapping("/home/categories")
//    public ResponseEntity<Home> createHomeCategories(
//            @RequestBody List<HomeCategory> homeCategories
//            ){
//        List<HomeCategory> categories = homeCategoryService.createCategories(homeCategories);
//        Home home = homeService.createHomePageData(categories);
//        return new ResponseEntity<>(home, HttpStatus.ACCEPTED);
//    }
//}
