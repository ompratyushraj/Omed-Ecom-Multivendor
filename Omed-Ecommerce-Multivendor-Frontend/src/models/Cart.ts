// Cart Model/Entity

import type { CartItem } from "./CartItem";
import type { User } from "./User";

export interface Cart {
  cartId: number;
  user: User;
  cartItems: Set<CartItem>;
  totalSellingPrice: number;
  totalMrpPrice: number;
  totalItem: number;
  discount: number;
  couponCode: string;
}
