export const HomeCategorySection = {
  MEDICAL_CATEGORIES: 'MEDICAL_CATEGORIES',
  FOOD_ITEM_CATEGORIES: 'FOOD_ITEM_CATEGORIES',
  GRID: 'GRID',
  SHOP_BY_CATEGORIES: 'SHOP_BY_CATEGORIES',
  DEALS: 'DEALS',
} as const;

export type HomeCategorySection =
  typeof HomeCategorySection[keyof typeof HomeCategorySection];


// export enum HomeCategorySection {
//   MEDICAL_CATEGORIES = 'MEDICAL_CATEGORIES',
//   FOOD_ITEM_CATEGORIES = 'FOOD_ITEM_CATEGORIES',
//   GRID = 'GRID',
//   SHOP_BY_CATEGORIES = 'SHOP_BY_CATEGORIES',
//   DEALS = 'DEALS',
// }