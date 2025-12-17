// import type { Review } from "../models/Review";
import type { Seller } from "./SellerType";

export interface Product {
  productId?: number;
  productTitle: string;
  productComposition?: string; //
  description: string;
  packType?: string;
  hsn?: string;
  batch?: string;
  brand?: string;
  colour?: string;
  sizes: string;
  mrpPrice: number;
  sellingPrice: number;
  discountPercent: number;
  quantity: number; // stockQuantity
  color: string;
  numRatings?: number;
  category?: Category;
  seller?: Seller;
  createdAt?: Date;
  images: string[];
  // reviews: Review[];
}

export interface Category {
  id?: number;
  name: string;
  categoryId: string;
  parentCategory?: Category;
  level: number;
}
