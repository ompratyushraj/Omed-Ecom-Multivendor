import type { Order } from "./OrderType";
import type { Seller } from "./SellerType";
import type { User } from "./UserType";

export interface Transaction{
    transactionId: number;
    customer: User;
    order: Order;
    seller: Seller;
    date: string;
}