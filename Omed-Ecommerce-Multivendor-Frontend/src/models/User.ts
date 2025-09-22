// User Model/Entity

import type { Address } from "./AddressType";
import type { Coupon } from "./Coupon";
import type { USER_ROLE } from "./enums/USER_ROLE";

export interface User {
  userId: number;
  username: string;
  password?: string; // Marked as optional because of @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  mobile: string;
  role: USER_ROLE;
  address: Set<Address>;
  usedCoupons: Set<Coupon>;
}
