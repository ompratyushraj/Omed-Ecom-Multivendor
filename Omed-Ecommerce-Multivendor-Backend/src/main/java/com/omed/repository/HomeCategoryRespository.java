package com.omed.repository;

import com.omed.model.HomeCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HomeCategoryRespository extends JpaRepository<HomeCategory,Long> {
}
