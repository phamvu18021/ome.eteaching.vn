import { FlashSaleData, FlashSaleSection, HomePageContent, WelcomeSection, ComingSoonSection, ColorSwatch } from '@/types/home';

export const flashSaleData: FlashSaleData = {
  mainTitle: "⚡ FLASH SALE 12.12",
  sections: [
    {
      id: 'tet-deal',
      title: '🔥 TET DEAL',
      subtitle: 'Ưu đãi khủng cuối năm',
      categoryType: 'hot-deals',
      endTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
      bannerImage: '/images/banner-5.png',
      products: [
        {
          id: '1',
          name: 'iPhone 15 Pro Max 256GB',
          image: '/images/product-9-1.jpg',
          originalPrice: 34990000,
          salePrice: 31990000,
          discount: 8,
          stock: 50,
          sold: 23,
          rating: 4.8,
          reviews: 156,
          category: 'hot-deals'
        },
        {
          id: '2', 
          name: 'Samsung Galaxy S24 Ultra 512GB',
          image: '/images/product-9-1.jpg',
          originalPrice: 33990000,
          salePrice: 28990000,
          discount: 15,
          stock: 30,
          sold: 18,
          rating: 4.7,
          reviews: 89,
          category: 'hot-deals'
        },
        {
          id: '3',
          name: 'MacBook Air M3 13" 16GB',
          image: '/images/product-9-1.jpg', 
          originalPrice: 32990000,
          salePrice: 29990000,
          discount: 9,
          stock: 25,
          sold: 12,
          rating: 4.9,
          reviews: 234,
          category: 'hot-deals'
        },
        {
          id: '4',
          name: 'iPad Pro M4 11" 1TB',
          image: '/images/product-9-1.jpg',
          originalPrice: 31990000,
          salePrice: 27990000,
          discount: 13,
          stock: 40,
          sold: 28,
          rating: 4.6,
          reviews: 67,
          category: 'hot-deals'
        }
      ]
    },
    {
      id: 'smartphone',
      title: '📱 ĐIỆN THOẠI',
      subtitle: 'Smartphone cao cấp giá sốc',
      categoryType: 'smartphone',
      endTime: new Date(Date.now() + 18 * 60 * 60 * 1000), // 18 hours from now
      bannerImage: '/images/banner-7.png',
      products: [
        {
          id: '5',
          name: 'iPhone 14 Pro 128GB',
          image: '/images/product-9-1.jpg',
          originalPrice: 27990000,
          salePrice: 24990000,
          discount: 11,
          stock: 60,
          sold: 45,
          rating: 4.8,
          reviews: 203,
          category: 'smartphone'
        },
        {
          id: '6',
          name: 'Xiaomi 14 Ultra 512GB',
          image: '/images/product-9-1.jpg',
          originalPrice: 24990000,
          salePrice: 21990000,
          discount: 12,
          stock: 35,
          sold: 22,
          rating: 4.5,
          reviews: 78,
          category: 'smartphone'
        },
        {
          id: '7',
          name: 'OPPO Find X7 Ultra',
          image: '/images/product-9-1.jpg',
          originalPrice: 22990000,
          salePrice: 19990000,
          discount: 13,
          stock: 45,
          sold: 31,
          rating: 4.4,
          reviews: 92,
          category: 'smartphone'
        },
        {
          id: '8',
          name: 'Google Pixel 8 Pro',
          image: '/images/product-9-1.jpg',
          originalPrice: 21990000,
          salePrice: 18990000,
          discount: 14,
          stock: 30,
          sold: 19,
          rating: 4.6,
          reviews: 156,
          category: 'smartphone'
        }
      ]
    },
    {
      id: 'laptop',
      title: '💻 LAPTOP',
      subtitle: 'Laptop gaming & văn phòng',
      categoryType: 'laptop',
      endTime: new Date(Date.now() + 15 * 60 * 60 * 1000), // 15 hours from now
      bannerImage: '/images/banner-10.png',
      products: [
        {
          id: '9',
          name: 'MacBook Air M3 13" 8GB',
          image: '/images/product-9-1.jpg',
          originalPrice: 28990000,
          salePrice: 25990000,
          discount: 10,
          stock: 20,
          sold: 8,
          rating: 4.9,
          reviews: 145,
          category: 'laptop'
        },
        {
          id: '10',
          name: 'Dell XPS 13 Plus',
          image: '/images/product-9-1.jpg',
          originalPrice: 35990000,
          salePrice: 31990000,
          discount: 11,
          stock: 15,
          sold: 6,
          rating: 4.6,
          reviews: 89,
          category: 'laptop'
        },
        {
          id: '11',
          name: 'HP Spectre x360 14',
          image: '/images/product-9-1.jpg',
          originalPrice: 29990000,
          salePrice: 26490000,
          discount: 12,
          stock: 25,
          sold: 11,
          rating: 4.5,
          reviews: 67,
          category: 'laptop'
        },
        {
          id: '12',
          name: 'ASUS ZenBook 14',
          image: '/images/product-9-1.jpg',
          originalPrice: 23990000,
          salePrice: 20990000,
          discount: 13,
          stock: 30,
          sold: 18,
          rating: 4.4,
          reviews: 112,
          category: 'laptop'
        }
      ]
    },
    {
      id: 'tablet',
      title: '📱 TABLET',
      subtitle: 'Máy tính bảng đa năng',
      categoryType: 'tablet',
      endTime: new Date(Date.now() + 12 * 60 * 60 * 1000), // 12 hours from now
      bannerImage: '/images/banner-13.png',
      products: [
        {
          id: '13',
          name: 'iPad Air M2 11" 128GB',
          image: '/images/product-9-1.jpg',
          originalPrice: 17990000,
          salePrice: 15990000,
          discount: 11,
          stock: 35,
          sold: 22,
          rating: 4.7,
          reviews: 134,
          category: 'tablet'
        },
        {
          id: '14',
          name: 'Samsung Galaxy Tab S9',
          image: '/images/product-9-1.jpg',
          originalPrice: 19990000,
          salePrice: 17490000,
          discount: 13,
          stock: 25,
          sold: 15,
          rating: 4.5,
          reviews: 89,
          category: 'tablet'
        },
        {
          id: '15',
          name: 'Xiaomi Pad 6 Pro',
          image: '/images/product-9-1.jpg',
          originalPrice: 12990000,
          salePrice: 10990000,
          discount: 15,
          stock: 40,
          sold: 28,
          rating: 4.3,
          reviews: 156,
          category: 'tablet'
        },
        {
          id: '16',
          name: 'Microsoft Surface Pro 9',
          image: '/images/product-9-1.jpg',
          originalPrice: 25990000,
          salePrice: 22990000,
          discount: 12,
          stock: 20,
          sold: 8,
          rating: 4.6,
          reviews: 78,
          category: 'tablet'
        }
      ]
    },
    {
      id: 'accessories',
      title: '🎧 PHỤ KIỆN',
      subtitle: 'Phụ kiện chính hãng',
      categoryType: 'accessories',
      endTime: new Date(Date.now() + 20 * 60 * 60 * 1000), // 20 hours from now
      products: [
        {
          id: '17',
          name: 'AirPods Pro 2nd Gen USB-C',
          image: '/images/product-9-1.jpg',
          originalPrice: 6490000,
          salePrice: 5490000,
          discount: 15,
          stock: 100,
          sold: 78,
          rating: 4.7,
          reviews: 245,
          category: 'accessories'
        },
        {
          id: '18',
          name: 'Samsung Galaxy Buds2 Pro',
          image: '/images/product-9-1.jpg',
          originalPrice: 4990000,
          salePrice: 3990000,
          discount: 20,
          stock: 80,
          sold: 65,
          rating: 4.5,
          reviews: 134,
          category: 'accessories'
        },
        {
          id: '19',
          name: 'Magic Keyboard cho iPad Pro',
          image: '/images/product-9-1.jpg',
          originalPrice: 7990000,
          salePrice: 6990000,
          discount: 13,
          stock: 25,
          sold: 15,
          rating: 4.6,
          reviews: 67,
          category: 'accessories'
        },
        {
          id: '20',
          name: 'Apple Pencil 2nd Gen',
          image: '/images/product-9-1.jpg',
          originalPrice: 3190000,
          salePrice: 2890000,
          discount: 9,
          stock: 50,
          sold: 32,
          rating: 4.8,
          reviews: 189,
          category: 'accessories'
        }
      ]
    },
    {
      id: 'smartwatch',
      title: '⌚ ĐỒNG HỒ',
      subtitle: 'Smartwatch thời trang',
      categoryType: 'smartwatch',
      endTime: new Date(Date.now() + 10 * 60 * 60 * 1000), // 10 hours from now
      products: [
        {
          id: '21',
          name: 'Apple Watch Series 9 45mm',
          image: '/images/product-9-1.jpg',
          originalPrice: 10990000,
          salePrice: 9490000,
          discount: 14,
          stock: 50,
          sold: 34,
          rating: 4.8,
          reviews: 189,
          category: 'smartwatch'
        },
        {
          id: '22',
          name: 'Samsung Galaxy Watch 6',
          image: '/images/product-9-1.jpg',
          originalPrice: 7990000,
          salePrice: 6990000,
          discount: 13,
          stock: 40,
          sold: 25,
          rating: 4.5,
          reviews: 123,
          category: 'smartwatch'
        },
        {
          id: '23',
          name: 'Garmin Venu 3',
          image: '/images/product-9-1.jpg',
          originalPrice: 12990000,
          salePrice: 11490000,
          discount: 12,
          stock: 30,
          sold: 18,
          rating: 4.6,
          reviews: 98,
          category: 'smartwatch'
        },
        {
          id: '24',
          name: 'Xiaomi Watch 2 Pro',
          image: '/images/product-9-1.jpg',
          originalPrice: 4990000,
          salePrice: 3990000,
          discount: 20,
          stock: 60,
          sold: 42,
          rating: 4.3,
          reviews: 156,
          category: 'smartwatch'
        }
      ]
    },
    {
      id: 'group-buy',
      title: '👥 NHÓM MUA',
      subtitle: 'Mua nhóm giá rẻ hơn',
      categoryType: 'group-buy',
      endTime: new Date(Date.now() + 6 * 60 * 60 * 1000), // 6 hours from now
      products: [
        {
          id: '25',
          name: 'Combo iPhone 15 + Case',
          image: '/images/product-9-1.jpg',
          originalPrice: 25990000,
          salePrice: 23990000,
          discount: 8,
          stock: 100,
          sold: 85,
          rating: 4.7,
          reviews: 234,
          category: 'group-buy'
        },
        {
          id: '26',
          name: 'Set bàn phím + chuột gaming',
          image: '/images/product-9-1.jpg',
          originalPrice: 2990000,
          salePrice: 2490000,
          discount: 17,
          stock: 200,
          sold: 156,
          rating: 4.4,
          reviews: 189,
          category: 'group-buy'
        },
        {
          id: '27',
          name: 'Combo sạc nhanh + cáp',
          image: '/images/product-9-1.jpg',
          originalPrice: 1490000,
          salePrice: 1190000,
          discount: 20,
          stock: 300,
          sold: 267,
          rating: 4.2,
          reviews: 345,
          category: 'group-buy'
        },
        {
          id: '28',
          name: 'Set 3 ốp lưng iPhone',
          image: '/images/product-9-1.jpg',
          originalPrice: 990000,
          salePrice: 790000,
          discount: 20,
          stock: 500,
          sold: 423,
          rating: 4.1,
          reviews: 567,
          category: 'group-buy'
        }
      ]
    }
  ]
};

export const HOME_BANNERS = [
  {
    id: "1",
    title: "Siêu sale cuối năm",
    subtitle: "Giảm giá sốc đến 70%",
    image: "/images/banner-5.png",
    link: "/shop"
  },
  {
    id: "2", 
    title: "Điện thoại hot nhất",
    subtitle: "Trả góp 0% lãi suất",
    image: "/images/banner-7.png",
    link: "/shop"
  },
  {
    id: "3",
    title: "Laptop gaming",
    subtitle: "Ưu đãi đặc biệt",
    image: "/images/banner-10.png", 
    link: "/shop"
  }
];

export const FEATURED_CATEGORIES = [
  {
    id: "1",
    name: "Điện thoại",
    icon: "/images/icon-5.svg",
    count: 450,
    link: "/shop?category=phone"
  },
  {
    id: "2",
    name: "Laptop",
    icon: "/images/icon-5.svg", 
    count: 230,
    link: "/shop?category=laptop"
  },
  {
    id: "3",
    name: "Tablet",
    icon: "/images/icon-5.svg",
    count: 180,
    link: "/shop?category=tablet"
  },
  {
    id: "4",
    name: "Phụ kiện",
    icon: "/images/icon-5.svg",
    count: 320,
    link: "/shop?category=accessories"
  }
];

export const WELCOME_CONTENT: WelcomeSection = {
  title: 'Chào mừng đến với Nest Store',
  subtitle: 'Mua sắm thông minh, tiết kiệm hơn'
};

export const COMING_SOON_CONTENT: ComingSoonSection = {
  title: 'Coming Soon',
  description: 'Các tính năng mới đang được phát triển'
};

export const COLOR_SWATCHES: ColorSwatch[] = [
  {
    name: 'Nest Red',
    className: 'bg-nest-red',
    textColor: 'text-white',
    colorValue: '#FB4E4E'
  },
  {
    name: 'Gray 50',
    className: 'bg-gray-50',
    textColor: 'text-gray-900',
    colorValue: '#F9FAFB'
  },
  {
    name: 'Gray 100',
    className: 'bg-gray-100',
    textColor: 'text-gray-900',
    colorValue: '#F3F4F6'
  },
  {
    name: 'Gray 200',
    className: 'bg-gray-200',
    textColor: 'text-gray-900',
    colorValue: '#E5E7EB'
  }
];

export const HOME_PAGE_CONTENT: HomePageContent = {
  welcome: WELCOME_CONTENT,
  comingSoon: COMING_SOON_CONTENT,
  colorSwatches: COLOR_SWATCHES,
  flashSale: flashSaleData
};