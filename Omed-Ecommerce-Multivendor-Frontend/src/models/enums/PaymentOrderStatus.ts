export const PaymentOrderStatus = {
  FAILED: 'FAILED',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
} as const;

export type PaymentOrderStatus = typeof PaymentOrderStatus[keyof typeof PaymentOrderStatus];


// export enum PaymentOrderStatus {
//   FAILED = 'FAILED',
//   PENDING = 'PENDING',
//   SUCCESS = 'SUCCESS',
// }