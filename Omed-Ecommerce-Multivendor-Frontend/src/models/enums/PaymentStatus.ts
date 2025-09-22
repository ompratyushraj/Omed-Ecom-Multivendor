export const PaymentStatus = {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
} as const;

export type PaymentStatus = typeof PaymentStatus[keyof typeof PaymentStatus];


// export enum PaymentStatus {
//   PENDING = 'PENDING',
//   PROCESSING = 'PROCESSING',
//   COMPLETED = 'COMPLETED',
//   FAILED = 'FAILED',
// }