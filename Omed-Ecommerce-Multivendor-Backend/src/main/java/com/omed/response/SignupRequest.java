package com.omed.response;

public class SignupRequest {

    private String email;
    private String username;
    private String otp;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getOtp() {
        return otp;
    }

    public void setOtp(String otp) {
        this.otp = otp;
    }



    public SignupRequest(String email, String otp, String username) {
        this.email = email;
        this.otp = otp;
        this.username = username;
    }
}

