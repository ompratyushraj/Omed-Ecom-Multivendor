import type { Product } from "./ProductType";
import type { User } from "./UserType";


export interface CartItem {
  cartItemId: number;
  cart?: Cart;
  product: Product;
  size: string;
  quantity: number;
  mrpPrice: number;
  sellingPrice: number;
  userId: number;
}

export interface Cart {
  cartId: number;
  user: User;
  cartItems: CartItem[];
  totalSellingPrice: number;
  totalItem: number;
  totalMrpPrice: number;
  discount: number;
  couponCode: string | null;
}