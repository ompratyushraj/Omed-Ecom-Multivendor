package com.omed.model;

import jakarta.persistence.*;
import lombok.*;

@EqualsAndHashCode
@Getter
@Setter
@Entity
public class VerificationCode {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long verificationId;

    private String otp;

    @Column(unique = true, nullable = false)
    private String email;

    @OneToOne
    private User user;

    @OneToOne
    private Seller seller;

    public Long getVerificationId() {
        return verificationId;
    }

    public void setVerificationId(Long verificationId) {
        this.verificationId = verificationId;
    }

    public String getOtp() {
        return otp;
    }

    public void setOtp(String otp) {
        this.otp = otp;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Seller getSeller() {
        return seller;
    }

    public void setSeller(Seller seller) {
        this.seller = seller;
    }

    public VerificationCode(Long verificationId, String otp, String email, Seller seller, User user) {
        this.verificationId = verificationId;
        this.otp = otp;
        this.email = email;
        this.seller = seller;
        this.user = user;
    }

    public VerificationCode(){}
}