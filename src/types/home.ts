export interface WelcomeSection {
  title: string;
  subtitle: string;
}

export interface ComingSoonSection {
  title: string;
  description: string;
}

export interface ColorSwatch {
  name: string;
  className: string;
  textColor: string;
  colorValue: string;
}

export interface FlashSaleProduct {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  stock: number;
  sold: number;
  rating: number;
  reviews: number;
  category: string;
}

export interface FlashSaleSection {
  id: string;
  title: string;
  subtitle: string;
  categoryType: string;
  endTime: Date;
  products: FlashSaleProduct[];
  bannerImage?: string;
}

export interface FlashSaleData {
  mainTitle: string;
  sections: FlashSaleSection[];
}

export interface HomePageContent {
  welcome: WelcomeSection;
  comingSoon: ComingSoonSection;
  colorSwatches: ColorSwatch[];
  flashSale?: FlashSaleData;
}