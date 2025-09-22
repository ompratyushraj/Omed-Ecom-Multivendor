// Category Model/Entity

export interface Category {
  categoryTableId: number;
  name?: string;
  categoryId: string;
  parentCategory?: Category; // Recursive relation (self-reference)
  level: number;
}
