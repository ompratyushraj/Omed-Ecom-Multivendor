package com.omed.model;

import com.omed.service.SellerReportService;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@EqualsAndHashCode
@Entity
public class SellerReport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long sellerReportId;

    @OneToOne
    private Seller seller;

    private Long totalEarnings = 0L;

    private Long totalSales = 0L;

    private Long totalRefunds = 0L;

    private Long totalTax = 0L;

    private Long netEarnings = 0L;

    private Integer totalOrders = 0;

    private Integer cancelledOrders = 0;

    private Integer totalTransactions = 0;

    // Constructors
    public SellerReport(){}

    public SellerReport(Long sellerReportId, Seller seller, Long totalEarnings, Long totalSales, Long totalRefunds, Long totalTax, Long netEarnings, Integer totalOrders, Integer cancelledOrders, Integer totalTransactions) {
        this.sellerReportId = sellerReportId;
        this.seller = seller;
        this.totalEarnings = totalEarnings;
        this.totalSales = totalSales;
        this.totalRefunds = totalRefunds;
        this.totalTax = totalTax;
        this.netEarnings = netEarnings;
        this.totalOrders = totalOrders;
        this.cancelledOrders = cancelledOrders;
        this.totalTransactions = totalTransactions;
    }

    public Long getSellerReportId() {
        return sellerReportId;
    }

    public void setSellerReportId(Long sellerReportId) {
        this.sellerReportId = sellerReportId;
    }

    public Seller getSeller() {
        return seller;
    }

    public void setSeller(Seller seller) {
        this.seller = seller;
    }

    public Long getTotalEarnings() {
        return totalEarnings;
    }

    public void setTotalEarnings(Long totalEarnings) {
        this.totalEarnings = totalEarnings;
    }

    public Long getTotalSales() {
        return totalSales;
    }

    public void setTotalSales(Long totalSales) {
        this.totalSales = totalSales;
    }

    public Long getTotalRefunds() {
        return totalRefunds;
    }

    public void setTotalRefunds(Long totalRefunds) {
        this.totalRefunds = totalRefunds;
    }

    public Long getTotalTax() {
        return totalTax;
    }

    public void setTotalTax(Long totalTax) {
        this.totalTax = totalTax;
    }

    public Long getNetEarnings() {
        return netEarnings;
    }

    public void setNetEarnings(Long netEarnings) {
        this.netEarnings = netEarnings;
    }

    public Integer getTotalOrders() {
        return totalOrders;
    }

    public void setTotalOrders(Integer totalOrders) {
        this.totalOrders = totalOrders;
    }

    public Integer getCancelledOrders() {
        return cancelledOrders;
    }

    public void setCancelledOrders(Integer cancelledOrders) {
        this.cancelledOrders = cancelledOrders;
    }

    public Integer getTotalTransactions() {
        return totalTransactions;
    }

    public void setTotalTransactions(Integer totalTransactions) {
        this.totalTransactions = totalTransactions;
    }
}