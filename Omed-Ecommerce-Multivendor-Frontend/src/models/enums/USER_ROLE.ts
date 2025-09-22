export const USER_ROLE = {
  ROLE_ADMIN: 'ROLE_ADMIN',
  ROLE_CUSTOMER: 'ROLE_CUSTOMER',
  ROLE_SELLER: 'ROLE_SELLER',
} as const;

export type USER_ROLE = typeof USER_ROLE[keyof typeof USER_ROLE];


// export enum USER_ROLE {
//   ROLE_ADMIN = 'ROLE_ADMIN',
//   ROLE_CUSTOMER = 'ROLE_CUSTOMER',
//   ROLE_SELLER = 'ROLE_SELLER',
// }