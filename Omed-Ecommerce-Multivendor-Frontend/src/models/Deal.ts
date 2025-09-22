// Deal Model/Entity

import type { HomeCategory } from "./HomeCategory";

export interface Deal {
  dealId: number;
  discount: number;
  category: HomeCategory;
}