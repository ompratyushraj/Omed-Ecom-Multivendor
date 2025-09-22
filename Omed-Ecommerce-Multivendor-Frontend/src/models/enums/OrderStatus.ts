export const OrderStatus = {
  PENDING: 'PENDING',
  PLACED: 'PLACED',
  CONFIRMED: 'CONFIRMED',
  SHIPPED: 'SHIPPED',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED',
} as const;

export type OrderStatus = typeof OrderStatus[keyof typeof OrderStatus];


// export enum OrderStatus {
//   PENDING = 'PENDING',
//   PLACED = 'PLACED',
//   CONFIRMED = 'CONFIRMED',
//   SHIPPED = 'SHIPPED',
//   DELIVERED = 'DELIVERED',
//   CANCELLED = 'CANCELLED',
// }