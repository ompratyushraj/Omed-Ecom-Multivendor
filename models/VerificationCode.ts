// Verification Code

import type { Seller } from "./Seller";
import type { User } from "./User";

export interface VerificationCode {
  verificationId: number;
  otp: string;
  email: string;
  user: User;
  seller: Seller;
}