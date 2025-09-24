import type { Deal } from "./DealType";

export interface HomeData {
  homeDataId: number;
  grid: HomeCategory[];
  shopByCategories: HomeCategory[];
  electricCategories: HomeCategory[];
  // genericCategories: GenericCategory[];
  deals: Deal[];
  dealCategories: HomeCategory[];
}
export interface HomeCategory {
  homeCategoryId?: number;
  categoryId: string;
  section?: string;
  name?: string;
  image: string;
  parentCategoryId?: string;
}