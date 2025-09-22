// Seller Report Model/Entity

import type { Seller } from "./Seller";

export interface SellerReport {
  sellerReportId: number;
  seller: Seller;
  totalEarnings: number;
  totalSales: number;
  totalRefunds: number;
  totalTax: number;
  netEarnings: number;
  totalOrders: number;
  cancelledOrders: number;
  totalTransactions: number;
}