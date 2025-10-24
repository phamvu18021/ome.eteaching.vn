export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  ome_etc_product_image_url: string;
  slug_url_ome_etc: string;
  discount_percent_from_promotion: number;
  price_after_promotion: number;
  description: string;
}

export interface Category {
  id?: string;
  name: string;
  slug: string;
  parentId?: string;
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface FilterOptions {
  categories: Category[];
  priceRange: PriceRange;
  brands: string[];
  tags: string[];
  ratings: number[];
}

export interface SortOption {
  value: string;
  label: string;
}

export interface ShopPageConfig {
  sortOptions: SortOption[];
  itemsPerPage: number;
  defaultSort: string;
}

export interface Brand {
  id: string;
  name: string;
  count: number;
}

export interface FilterState {
  priceRange: PriceRange;
  selectedBrands: string[];
  selectedRating: number;
  selectedCategory?: string;
  studyDuration?: PriceRange;
}

export interface ProductGridProps {
  products: Product[];
  viewMode?: "grid" | "list";
}

export interface ProductCardProps {
  product: Product;
  viewMode?: "grid" | "list";
}

export interface ShopSidebarProps {
  categories: Category[];
  brands: Brand[];
  selectedCategoryId?: string;
  filterState: FilterState;
  onFilterChange: (filters: FilterState) => void;
}
