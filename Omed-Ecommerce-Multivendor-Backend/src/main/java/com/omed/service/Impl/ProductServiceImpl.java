package com.omed.service.Impl;

import com.omed.exception.ProductException;
import com.omed.model.Category;
import com.omed.model.Product;
import com.omed.model.Seller;
import com.omed.repository.CategoryRepository;
import com.omed.repository.ProductRepository;
import com.omed.request.CreateProductRequest;
import com.omed.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Join;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    public ProductServiceImpl(CategoryRepository categoryRepository, ProductRepository productRepository) {
        this.categoryRepository = categoryRepository;
        this.productRepository = productRepository;
    }

    @Override
    public Product createProduct(CreateProductRequest request, Seller seller) {
        // Handle category hierarchy properly
        Category category1 = categoryRepository.findByCategoryId(request.getCategory1());
        if (category1 == null) {
            category1 = new Category();
            category1.setCategoryId(request.getCategory1());
            category1.setLevel(1);
            category1 = categoryRepository.save(category1);
        }

        Category category2 = categoryRepository.findByCategoryId(request.getCategory2());
        if (category2 == null) {
            category2 = new Category();
            category2.setCategoryId(request.getCategory2());
            category2.setLevel(2);
            category2.setParentCategory(category1);
            category2 = categoryRepository.save(category2);
        }

        Category category3 = categoryRepository.findByCategoryId(request.getCategory3());
        if (category3 == null) {
            category3 = new Category();
            category3.setCategoryId(request.getCategory3());
            category3.setLevel(3);
            category3.setParentCategory(category2);
            category3 = categoryRepository.save(category3);
        }

        // Calculate discount
        int discountPercentage = calculateDiscountPercentage(request.getMrpPrice(), request.getSellingPrice());

        // Build Product entity with all request fields
        Product product = new Product();
        product.setSeller(seller);
        product.setCategory(category3);
        product.setProductTitle(request.getProductTitle());
        product.setDescription(request.getDescription());
        product.setMrpPrice(request.getMrpPrice());
        product.setSellingPrice(request.getSellingPrice());
        product.setDiscountPercent(discountPercentage);
        product.setStockQuantity(request.getStockQuantity());
        product.setColour(request.getColour());
        product.setImages(request.getImages());
        product.setSizes(request.getSizes());
        product.setBrand(request.getBrand());
        product.setHsn(request.getHsn());
        product.setBatch(request.getBatch());
        product.setProductComposition(request.getProductComposition());
        product.setPackType(request.getPackType());
        product.setCreatedAt(LocalDateTime.now());

        return productRepository.save(product);
    }

    private int calculateDiscountPercentage(int mrpPrice, int sellingPrice) {
        if (mrpPrice <= 0) {
            throw new IllegalArgumentException("MRP must be greater than 0.");
        }
        double discount = mrpPrice - sellingPrice;
        double percent = (discount / mrpPrice) * 100;
        return (int) percent;
    }

    @Override
    public void deleteProduct(Long productId) throws ProductException {
        Product product = findProductById(productId);
        productRepository.delete(product);
    }

//    @Override
//    public Product updateProduct(Long productId, Product product) throws ProductException {
//        findProductById(productId);
//        product.setProductId(productId);
//        return productRepository.save(product);
//    }

    @Override
    public Product updateProduct(Long productId, Product updatedData) throws ProductException {
        // Fetch existing product from DB
        Product existing = findProductById(productId);

        // Update all allowed fields (if not null)
        existing.setProductTitle(updatedData.getProductTitle());
        existing.setProductComposition(updatedData.getProductComposition());
        existing.setDescription(updatedData.getDescription());
        existing.setPackType(updatedData.getPackType());
        existing.setHsn(updatedData.getHsn());
        existing.setBatch(updatedData.getBatch());
        existing.setBrand(updatedData.getBrand());
        existing.setColour(updatedData.getColour());
        existing.setSizes(updatedData.getSizes());

        // Prices
        existing.setMrpPrice(updatedData.getMrpPrice());
        existing.setSellingPrice(updatedData.getSellingPrice());

        // Recalculate discount if prices are updated
        if (updatedData.getMrpPrice() > 0 && updatedData.getSellingPrice() > 0) {
            int discount = calculateDiscountPercentage(updatedData.getMrpPrice(), updatedData.getSellingPrice());
            existing.setDiscountPercent(discount);
        }

        existing.setStockQuantity(updatedData.getStockQuantity());

        // Do NOT overwrite numRatings or createdAt unless explicitly desired
        // existing.setNumRatings(updatedData.getNumRatings());
        // existing.setCreatedAt(updatedData.getCreatedAt());

        // Category update
        if (updatedData.getCategory() != null && updatedData.getCategory().getCategoryId() != null) {
            Category category = categoryRepository.findByCategoryId(updatedData.getCategory().getCategoryId());
            if (category == null) {
                throw new ProductException("Category not found with categoryId: " + updatedData.getCategory().getCategoryId());
            }
            existing.setCategory(category);
        }

        // Images (optional: replace entirely)
        if (updatedData.getImages() != null) {
            existing.setImages(updatedData.getImages());
        }

        // Do NOT update seller here — preserve original seller
        // Do NOT overwrite reviews directly (handled via review APIs)

        return productRepository.save(existing);
    }


    @Override
    public Product findProductById(Long productId) throws ProductException {
        return productRepository.findById(productId)
                .orElseThrow(() -> new ProductException("Product not found with id " + productId));
    }

    @Override
    public List<Product> searchProducts(String query) {
        return productRepository.searchProduct(query);
    }

    @Override
    public Page<Product> getAllProducts(String category, String brand, String colors, String sizes,
                                        Integer minPrice, Integer maxPrice, Integer minDiscount,
                                        String sort, String stock, Integer pageNumber) {
        Specification<Product> specification = (root, queryObj, cb) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (category != null && !category.isEmpty()) {
                Join<Product, Category> join = root.join("category");
                predicates.add(cb.equal(join.get("categoryId"), category));
            }
            if (brand != null && !brand.isEmpty()) {
                predicates.add(cb.equal(root.get("brand"), brand));
            }
            if (colors != null && !colors.isEmpty()) {
                predicates.add(cb.equal(root.get("colour"), colors));
            }
            if (sizes != null && !sizes.isEmpty()) {
                predicates.add(cb.equal(root.get("sizes"), sizes));
            }
            if (minPrice != null) {
                predicates.add(cb.greaterThanOrEqualTo(root.get("sellingPrice"), minPrice));
            }
            if (maxPrice != null) {
                predicates.add(cb.lessThanOrEqualTo(root.get("sellingPrice"), maxPrice));
            }
            if (minDiscount != null) {
                predicates.add(cb.greaterThanOrEqualTo(root.get("discountPercent"), minDiscount));
            }
            if (stock != null && !stock.isEmpty()) {
                // can be extended to support boolean 'in'/'out'
                if (stock.equalsIgnoreCase("in")) {
                    predicates.add(cb.greaterThan(root.get("stockQuantity"), 0));
                } else if (stock.equalsIgnoreCase("out")) {
                    predicates.add(cb.equal(root.get("stockQuantity"), 0));
                }
            }

            return cb.and(predicates.toArray(new Predicate[0]));
        };

        int page = pageNumber != null ? pageNumber : 0;
        Pageable pageable = PageRequest.of(page, 10, determineSort(sort));

        return productRepository.findAll(specification, pageable);
    }

    private Sort determineSort(String sort) {
        if (sort != null) {
            switch (sort.toLowerCase()) {
                case "price_low_to_high":
                    return Sort.by("sellingPrice").ascending();
                case "price_high_to_low":
                    return Sort.by("sellingPrice").descending();
                case "newest":
                    return Sort.by("createdAt").descending();
                default:
                    return Sort.unsorted();
            }
        }
        return Sort.unsorted();
    }

    @Override
    public List<Product> getProductBySellerId(Long sellerId) {
        return productRepository.findBySeller_SellerId(sellerId);
    }

    // Suggested additional methods for extended functionality:
    /*
    public List<Product> getProductsByBrand(String brand) { ... }
    public Page<Product> getProductsInStock(Integer pageNumber) { ... }
    public Page<Product> getProductsOutOfStock(Integer pageNumber) { ... }
    public List<Product> getLatestProducts(int limit) { ... }
    public double calculateAverageRating(Long productId) { ... }
    public void bulkUpdateStock(Map<Long, Integer> stockUpdates) { ... }
    public Product updateProductFromRequest(Long id, UpdateProductRequest dto) { ... }
    */
}