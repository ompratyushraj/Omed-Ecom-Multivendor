package com.omed.repository;

import com.omed.model.Seller;
import com.omed.model.User;
import com.omed.model.VerificationCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VerificationCodeRepository extends JpaRepository<VerificationCode, Long> {

    VerificationCode findByEmail(String email);
    VerificationCode findByUser(User user);
    VerificationCode findBySeller(Seller seller);
    VerificationCode findByOtp(String otp);

}