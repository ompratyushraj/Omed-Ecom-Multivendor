// Payment Details Model/Entity

import type { PaymentStatus } from "./enums/PaymentStatus";


export interface PaymentDetails {
  paymentId: string;
  razorpayPaymentLinkId: string;
  razorpayPaymentLinkReferenceId: string;
  razorpayPaymentLinkStatus: string;
  razorpayPaymentId: string;
  status: PaymentStatus;
}
