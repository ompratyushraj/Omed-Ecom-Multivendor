package com.omed.service;

import com.omed.domain.USER_ROLE;
import com.omed.request.LoginRequest;
import com.omed.response.AuthResponse;
import com.omed.response.SignupRequest;
import org.springframework.stereotype.Service;

@Service
public interface AuthService {

    void sentLoginOtp(String email, USER_ROLE role) throws Exception;

    String createUser(SignupRequest request) throws Exception;

    AuthResponse signing(LoginRequest request) throws Exception;
}