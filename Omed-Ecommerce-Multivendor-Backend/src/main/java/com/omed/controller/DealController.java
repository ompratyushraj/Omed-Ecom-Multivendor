package com.omed.controller;

import com.omed.model.Deal;
import com.omed.repository.DealRepository;
import com.omed.response.ApiResponse;
import com.omed.service.DealService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/deals")
public class DealController {

    private final DealService dealService;
    private final DealRepository dealRepository;

    @GetMapping
    public ResponseEntity<List<Deal>> getDeals(){
        List<Deal> createdDeals = dealService.getDeals();
        return new ResponseEntity<>(createdDeals, HttpStatus.ACCEPTED);
    }

    public DealController(DealService dealService, DealRepository dealRepository) {
        this.dealService = dealService;
        this.dealRepository = dealRepository;
    }

    @PostMapping
    public ResponseEntity<Deal> createDeals(@RequestBody Deal deals){
        Deal createdDeals = dealService.createDeal(deals);
        return new ResponseEntity<>(createdDeals, HttpStatus.ACCEPTED);
    }

    @PatchMapping("{dealId}")
    public ResponseEntity<Deal> updateDeal(@PathVariable Long dealId, @RequestBody Deal deal) throws Exception {
        Deal updatedDeal = dealService.updateDeal(deal, dealId);
        return ResponseEntity.ok(updatedDeal);
    }

    @DeleteMapping("/{dealId}")
    public ResponseEntity<ApiResponse> deleteDeal(@PathVariable Long dealId) throws Exception {
        dealService.deleteDeal(dealId);
        ApiResponse apiResponse = new ApiResponse();
        apiResponse.setMessage("Deal deleted !");

        return new ResponseEntity<>(apiResponse, HttpStatus.ACCEPTED);
    }

}
