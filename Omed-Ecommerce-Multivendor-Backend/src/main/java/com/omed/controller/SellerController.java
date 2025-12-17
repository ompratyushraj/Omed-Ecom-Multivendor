package com.omed.controller;

import com.omed.config.JwtProvider;
import com.omed.domain.AccountStatus;
import com.omed.exception.SellerException;
import com.omed.model.Seller;
import com.omed.model.SellerReport;
import com.omed.model.VerificationCode;
import com.omed.repository.SellerRepository;
import com.omed.repository.VerificationCodeRepository;
import com.omed.request.LoginRequest;
import com.omed.response.ApiResponse;
import com.omed.response.AuthResponse;
import com.omed.service.AuthService;
import com.omed.service.EmailService;
import com.omed.service.SellerReportService;
import com.omed.service.SellerService;
import com.omed.utils.OtpUtil;
import jakarta.mail.MessagingException;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.slf4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sellers")
public class SellerController {

    private final SellerService sellerService;
    private final VerificationCodeRepository verificationCodeRepository;
    private final AuthService authService;
    private final EmailService emailService;
    private final JwtProvider jwtProvider;
    private final SellerReportService sellerReportService;
    private Logger log;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> loginSeller(
            @RequestBody LoginRequest request
    ) throws Exception {
        String otp = request.getOtp();
        String email = request.getEmail();

        request.setEmail("seller_"+email);
        System.out.println(otp+" - " + email);
        AuthResponse authResponse = authService.signing(request);

        return ResponseEntity.ok(authResponse);
    }

    @PatchMapping("/verify/{otp}")
    public ResponseEntity<Seller> verifySellerEmail(@PathVariable String otp) throws Exception {
        VerificationCode verificationCode = verificationCodeRepository.findByOtp(otp);
        if(verificationCode == null || !verificationCode.getOtp().equals(otp)){
            throw new Exception("Wrong OTP...!");
        }
        Seller seller = sellerService.verifyEmail(verificationCode.getEmail(), otp);
        return new ResponseEntity<>(seller, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Seller> createSeller(@RequestBody Seller seller) throws Exception, MessagingException{
        Seller savedSeller = sellerService.createSeller(seller);

        String otp = OtpUtil.generateOtp();

        VerificationCode verificationCode = new VerificationCode();
        verificationCode.setOtp(otp);
        verificationCode.setEmail(seller.getEmail());
        verificationCodeRepository.save(verificationCode);

        String subject = "Omed Ecom Email Verification Code";
        String text = "Welcome to Omed Ecom, verfiy your account using this link";
        String fontend_url = "http://localhost:3000/verify-seller/";
        emailService.sendVerificationOtpEmail(seller.getEmail(), verificationCode.getOtp(), subject, text + fontend_url);
        return new ResponseEntity<>(savedSeller, HttpStatus.CREATED);
    }

    @GetMapping("/{sellerId}")
    public ResponseEntity<Seller> getSellerById(@PathVariable Long sellerId) throws SellerException {
        Seller seller = sellerService.getSellerById(sellerId);
        return new ResponseEntity<>(seller, HttpStatus.OK);
    }

    @GetMapping("/profile")
    public ResponseEntity<Seller> getSellerByJwt(@RequestHeader("Authorization") String jwt) throws Exception {
        Seller seller = sellerService.getSellerProfile(jwt);
        return new ResponseEntity<>(seller, HttpStatus.OK);
    }

    @GetMapping("/report")
    public ResponseEntity<SellerReport> getSellerReport(@RequestHeader("Authorization") String jwt) throws Exception {
        Seller seller = sellerService.getSellerProfile(jwt);
        SellerReport sellerReport = sellerReportService.getSellerReport(seller);
        return new ResponseEntity<>(sellerReport, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Seller>> getAllSellers(@RequestParam(required = false)AccountStatus status){
        List<Seller> sellers = sellerService.getAllSellers(status);
        return ResponseEntity.ok(sellers);
    }

    @PatchMapping()
    public ResponseEntity<Seller> updateSeller(@RequestHeader("Authorization") String jwt,
                                               @RequestBody Seller seller) throws Exception{
        Seller profile = sellerService.getSellerProfile(jwt);
        Seller updateSeller = sellerService.updateSeller(profile.getSellerId(), seller);
        return ResponseEntity.ok(updateSeller);
    }

    @DeleteMapping("/{sellerId}")
    public ResponseEntity<Void> deleteSeller(@PathVariable Long sellerId) throws Exception{
        sellerService.deleteSeller(sellerId);
        return ResponseEntity.noContent().build();
    }

    public SellerController(SellerService sellerService, VerificationCodeRepository verificationCodeRepository, AuthService authService, EmailService emailService, JwtProvider jwtProvider, SellerReportService sellerReportService) {
        this.sellerService = sellerService;
        this.verificationCodeRepository = verificationCodeRepository;
        this.authService = authService;
        this.emailService = emailService;
        this.jwtProvider = jwtProvider;
        this.sellerReportService = sellerReportService;
    }


}