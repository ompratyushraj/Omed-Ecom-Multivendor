// Product Model/Entity

import type { Category } from "./Category";
import type { Review } from "./Review";
import type { Seller } from "./Seller";

export interface Product {
  productId: number;
  productTitle: string;
  productComposition?: string;
  description?: string;
  packType?: string;
  hsn?: string;
  batch?: string;
  brand?: string;
  colour?: string;
  sizes?: string;

  mrpPrice: number;
  sellingPrice: number;
  discountPercent: number;
  stockQuantity: number;

  numRatings: number;

  createdAt: string; // ISO string (LocalDateTime)
  
  category: Category;
  seller: Seller;

  images: string[];
  reviews: Review[];
}
