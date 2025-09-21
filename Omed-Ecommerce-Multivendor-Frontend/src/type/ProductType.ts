import type { Seller } from "./SellerType";

export interface Product {
    productId?: number;
    productTitle: string;
    description: string;
    mrpPrice: number;
    sellingPrice: number;
    discountPercent: number;
    quantity: number;
    color: string;
    numRatings? : number;
    category? : AudioContextLatencyCategory;
    seller? : Seller;
    createdAt? : Date;
    sizes: string;
    images: string[];
}

export interface Category{
    id? : number;
    name: string;
    categoryId: string;
    parentCategory? : Category;
    level: number;
}