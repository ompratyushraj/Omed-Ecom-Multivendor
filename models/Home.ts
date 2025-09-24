// Home

import type { Deal } from "./Deal";
import type { HomeCategory } from "./HomeCategory";

export interface Home {
  grid: HomeCategory[];
  shopByCategories: HomeCategory[];
  medicalCategories: HomeCategory[];
  foodItemCategories: HomeCategory[];
  dealCategories: HomeCategory[];
  deals: Deal[];
}