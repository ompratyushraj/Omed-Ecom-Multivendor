// Review Model / Entity

import type { Product } from "./Product";
import type { User } from "./User";

export interface Review {
  reviewId: number;
  reviewText: string;
  rating: number;
  productImages: string[];
  product?: Product; // Marked optional if excluded from certain payloads (e.g., JsonIgnore)
  user: User;
  createdAt: string; // ISO date string
}
