// Order Item Entity/Model

import type { Order } from "./Order";
import type { Product } from "./Product";

export interface OrderItem {
  orderItemId: number;
  order: Order;
  product: Product;
  sizes: string;
  quantity: number;
  mrpPrice: number;
  sellingPrice: number;
  userId: number;
}