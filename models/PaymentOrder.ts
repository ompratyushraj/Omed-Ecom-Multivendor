// Payment Order Model/Entity

import type { PaymentMethod } from "./enums/PaymentMethod";
import type { PaymentOrderStatus } from "./enums/PaymentOrderStatus";
import type { Order } from "./Order";
import type { User } from "./User";

export interface PaymentOrder {
  paymentOrderTableId: number;
  amount: number;
  status: PaymentOrderStatus;
  paymentMethod: PaymentMethod;
  paymentLinkId: string;
  user: User;
  orders: Set<Order>;
}

