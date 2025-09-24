import type { Order } from "./Order";
import type { Seller } from "./Seller";
import type { User } from "./User";

export interface Transaction {
  transactionTableId: number;
  customer: User;
  order: Order;
  seller: Seller;
  date: string; // Using string for LocalDateTime
}