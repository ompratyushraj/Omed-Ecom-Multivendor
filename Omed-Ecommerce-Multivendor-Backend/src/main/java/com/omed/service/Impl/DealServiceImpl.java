package com.omed.service.Impl;

import com.omed.model.Deal;
import com.omed.model.HomeCategory;
import com.omed.repository.DealRepository;
import com.omed.repository.HomeCategoryRespository;
import com.omed.service.DealService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DealServiceImpl implements DealService {

    private final DealRepository dealRepository;
    private final HomeCategoryRespository homeCategoryRespository;

    public DealServiceImpl(DealRepository dealRepository, HomeCategoryRespository homeCategoryRespository) {
        this.dealRepository = dealRepository;
        this.homeCategoryRespository = homeCategoryRespository;
    }

    @Override
    public List<Deal> getDeals() {
        return dealRepository.findAll();
    }

    @Override
    public Deal createDeal(Deal deal) {
        HomeCategory category = homeCategoryRespository.findById(deal.getCategory().getHomeCategoryId()).orElse(null);
        Deal newDeal = dealRepository.save(deal);
        newDeal.setCategory(category);
        newDeal.setDiscount(deal.getDiscount());
        return dealRepository.save(newDeal);
    }

    @Override
    public Deal updateDeal(Deal deal, Long dealId) throws Exception {
        Deal existingDeal = dealRepository.findById(dealId).orElse(null);
        HomeCategory category = homeCategoryRespository.findById(deal.getCategory().getHomeCategoryId()).orElse(null);
        if(existingDeal!=null){
            if(deal.getDiscount()!=null){
                existingDeal.setDiscount(deal.getDiscount());
            }
            if(category!=null){
                existingDeal.setCategory(category);
            }
            return dealRepository.save(existingDeal);
        }
        throw new Exception("Deal not found !");
    }

    @Override
    public void deleteDeal(Long dealId) throws Exception {
        Deal deal = dealRepository.findById(dealId).orElseThrow(()-> new Exception("Deal not found !"));
        dealRepository.delete(deal);
    }
}
