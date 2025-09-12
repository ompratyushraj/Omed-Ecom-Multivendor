package com.omed.repository;

import com.omed.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>, JpaSpecificationExecutor<Product> {

    List<Product> findBySeller_SellerId(Long sellerId);

    @Query("SELECT p FROM Product p where (:query IS NULL OR LOWER(p.productTitle)" +
            " LIKE lower(concat('%', :query, '%')))" +
            " or (:query is null or lower(p.category.name)" +
            " LIKE lower(concat('%', :query, '%')))")
    List<Product> searchProduct(@Param("query") String query);
}