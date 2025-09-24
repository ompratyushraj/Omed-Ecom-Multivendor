export const AccountStatus = {
  PENDING_VERIFICATION: 'PENDING_VERIFICATION',
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  DEACTIVATED: 'DEACTIVATED',
  BANNED: 'BANNED',
  CLOSED: 'CLOSED',
} as const;

export type AccountStatus = typeof AccountStatus[keyof typeof AccountStatus];



// export enum AccountStatus {
//   PENDING_VERIFICATION = 'PENDING_VERIFICATION',
//   ACTIVE = 'ACTIVE',
//   SUSPENDED = 'SUSPENDED',
//   DEACTIVATED = 'DEACTIVATED',
//   BANNED = 'BANNED',
//   CLOSED = 'CLOSED',
// }