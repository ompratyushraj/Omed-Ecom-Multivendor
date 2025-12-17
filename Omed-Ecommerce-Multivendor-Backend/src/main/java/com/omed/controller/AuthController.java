package com.omed.controller;

import com.omed.model.User;
import com.omed.model.VerificationCode;
import com.omed.repository.UserRepository;
import com.omed.request.LoginOtpRequest;
import com.omed.request.LoginRequest;
import com.omed.response.ApiResponse;
import com.omed.response.AuthResponse;
import com.omed.response.SignupRequest;
import com.omed.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final AuthService authService;

    public AuthController(UserRepository userRepository, AuthService authService) {
        this.userRepository = userRepository;
        this.authService = authService;
    }

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody SignupRequest request) throws Exception {

        String jwt = authService.createUser(request);

        User savedUser = userRepository.findByEmail(request.getEmail());

        AuthResponse response = new AuthResponse();
        response.setJwt(jwt);
        response.setMessage("register success");
        response.setRole(savedUser.getRole());

        return ResponseEntity.ok(response);
    }

    @PostMapping("/sent/loginSignupOtp")
    public ResponseEntity<ApiResponse> sentOtpHandler(@RequestBody LoginOtpRequest request) throws Exception {

        authService.sentLoginOtp(request.getEmail(), request.getRole());

        ApiResponse response = new ApiResponse();
        response.setMessage("OTP sent successfully");

        return ResponseEntity.ok(response);
    }

    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> loginHandler(@RequestBody LoginRequest request) throws Exception {
        AuthResponse authResponse = authService.signing(request);
        return ResponseEntity.ok(authResponse);
    }
}