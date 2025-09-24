// Coupon Model/Entity

import type { User } from "./User";

export interface Coupon {
  couponId: number;
  code: string;
  discountPercentage: number;
  validityStartDate: string; // Using string for LocalDate
  validityEndDate: string; // Using string for LocalDate
  minimumOrderValue: number;
  isActive: boolean;
  usedByUsers: Set<User>;
}