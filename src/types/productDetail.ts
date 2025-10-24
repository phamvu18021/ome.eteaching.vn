/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ProductImage {
  img: any;
  id: string;
  url: string;
  alt: string;
}

export interface ProductSize {
  value: string;
  label: string;
  inStock: boolean;
}

export interface ProductDetailInfo {
  sku: string;
  category: string;
  tags: string[];
}

export interface ProductReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}
