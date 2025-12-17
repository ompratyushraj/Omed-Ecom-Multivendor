package com.omed.controller;

import com.omed.domain.AccountStatus;
import com.omed.exception.SellerException;
import com.omed.model.Seller;
import com.omed.service.SellerService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AdminController {

    private final SellerService sellerService;

    public AdminController(SellerService sellerService) {
        this.sellerService = sellerService;
    }

    @PatchMapping("/seller/{sellerId}/status/{status}")
    public ResponseEntity<Seller> updateSellerStatus(@PathVariable Long sellerId, @PathVariable AccountStatus status) throws Exception {
        Seller updatedSeller = sellerService.updateSellerAccountStatus(sellerId, status);
        return ResponseEntity.ok(updatedSeller);
    }

}
