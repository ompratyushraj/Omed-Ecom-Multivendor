// Order Model/Entity

import type { Address } from "./AddressType";
import type { OrderStatus } from "./enums/OrderStatus";
import type { PaymentStatus } from "./enums/PaymentStatus";
import type { OrderItem } from "./OrderItem";
import type { PaymentDetails } from "./PaymentDetails";
import type { User } from "./User";

export interface Order {
  orderTableId: number;
  orderId: string;
  user: User;
  sellerId: number;
  orderItems: OrderItem[];
  shippingAddress: Address;
  paymentDetails: PaymentDetails;
  totalMrpPrice: number;
  totalSellingPrice: number;
  discount: number;
  orderStatus: OrderStatus;
  totalItem: number;
  paymentStatus: PaymentStatus;
  orderDate: string; // Using string for LocalDateTime
  deliverDate: string; // Using string for LocalDateTime
}