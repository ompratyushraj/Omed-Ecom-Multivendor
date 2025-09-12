package com.omed.model;

import jakarta.persistence.*;

@Embeddable
public class BusinessDetails {

    @Column(name = "business_name")
    private String businessName;

    @Column(name = "business_email")
    private String businessEmail;

    @Column(name = "business_mobile")
    private String businessMobile;

    @Column(name = "business_address")
    private String businessAddress;

    @Column(name = "logo")
    private String logo;

    @Column(name = "banner")
    private String banner;


    // No-arg constructor (required by JPA)
    public BusinessDetails() {
    }

    // All-arg constructor
    public BusinessDetails(String businessName, String businessEmail, String businessMobile,
                           String businessAddress, String logo, String banner) {
        this.businessName = businessName;
        this.businessEmail = businessEmail;
        this.businessMobile = businessMobile;
        this.businessAddress = businessAddress;
        this.logo = logo;
        this.banner = banner;
    }

    // Getters and setters

    public String getBusinessName() {
        return businessName;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

    public String getBusinessEmail() {
        return businessEmail;
    }

    public void setBusinessEmail(String businessEmail) {
        this.businessEmail = businessEmail;
    }

    public String getBusinessMobile() {
        return businessMobile;
    }

    public void setBusinessMobile(String businessMobile) {
        this.businessMobile = businessMobile;
    }

    public String getBusinessAddress() {
        return businessAddress;
    }

    public void setBusinessAddress(String businessAddress) {
        this.businessAddress = businessAddress;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public String getBanner() {
        return banner;
    }

    public void setBanner(String banner) {
        this.banner = banner;
    }
}