// Home Category Model/Entity

import type { HomeCategorySection } from "./enums/HomeCategorySection";

export interface HomeCategory {
  homeCategoryId: number;
  name: string;
  image: string;
  categoryId: string;
  section: HomeCategorySection;
}
