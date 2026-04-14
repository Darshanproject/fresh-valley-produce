export type ProductCategory =
  | "Root Vegetables"
  | "Leafy Greens"
  | "Nightshades"
  | "Brassicas"
  | "Alliums"
  | "Legumes"
  | "Gourds";

export type Season = "Spring" | "Summer" | "Autumn" | "Winter" | "Year-Round";

export type Availability = "In Season" | "Limited" | "Pre-Order" | "Available";

export interface Product {
  id: string;
  name: string;
  description: string;
  season: Season;
  availability: Availability;
  category: ProductCategory;
  sourcing: string;
  minOrder?: string;
  tags?: string[];
}
