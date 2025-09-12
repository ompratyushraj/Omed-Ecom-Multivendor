package com.omed.service.Impl;

import com.omed.model.Seller;
import com.omed.model.SellerReport;
import com.omed.repository.SellerReportRepository;
import com.omed.service.SellerReportService;
import org.springframework.stereotype.Service;

@Service
public class SellerReportServiceImpl implements SellerReportService {

    private final SellerReportRepository sellerReportRepository;

    public SellerReportServiceImpl(SellerReportRepository sellerReportRepository) {
        this.sellerReportRepository = sellerReportRepository;
    }

    @Override
    public SellerReport getSellerReport(Seller seller) {
        SellerReport sellerReport = sellerReportRepository.findBySellerReportId(seller.getSellerId());

        if(sellerReport == null){
            SellerReport newReport = new SellerReport();
            newReport.setSeller(seller);
            return sellerReportRepository.save(newReport);
        }
        return sellerReport;
    }

    @Override
    public SellerReport updateSellerReport(SellerReport sellerReport) {
        return sellerReportRepository.save(sellerReport);
    }
}
