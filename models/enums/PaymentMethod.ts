export const PaymentMethod = {
  RAZORPAY: 'RAZORPAY',
  STRIPE: 'STRIPE',
} as const;

export type PaymentMethod = typeof PaymentMethod[keyof typeof PaymentMethod];


// export enum PaymentMethod {
//   RAZORPAY = 'RAZORPAY',
//   STRIPE = 'STRIPE',
// }