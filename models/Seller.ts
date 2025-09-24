// Seller Model/Entity/Type

import type { Address } from "./AddressType";
import type { BankDetails } from "./BankDetails";
import type { BusinessDetails } from "./BusinessDetails";
import type { AccountStatus } from "./enums/AccountStatus";
import type { USER_ROLE } from "./enums/USER_ROLE";


export interface Seller {
  sellerId: number;
  sellerName?: string;
  mobile?: string;
  email: string;
  password?: string;
  businessDetails?: BusinessDetails;
  bankDetails?: BankDetails;
  pickupAddress?: Address;
  GSTIN?: string;
  role: USER_ROLE;
  isEmailVerified: boolean;
  accountStatus: AccountStatus;
}
