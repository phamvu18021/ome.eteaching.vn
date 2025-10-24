'use client';

import React, { useState, useEffect } from 'react';
import { FlashSaleData, FlashSaleSection as FlashSaleSectionType, FlashSaleProduct } from '@/types/home';

interface FlashSaleProps {
  data: FlashSaleData;
}

const FlashSale: React.FC<FlashSaleProps> = ({ data }) => {
  return (
    <div className="py-8 space-y-8">
      {/* Main Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-nest-red mb-2">{data.mainTitle}</h1>
        <p className="text-nest-gray text-lg">Khuyến mãi lớn nhất trong năm</p>
      </div>

      {/* Flash Sale Sections */}
      {data.sections.map((section) => (
        <FlashSaleSectionComponent key={section.id} section={section} />
      ))}
    </div>
  );
};

interface FlashSaleSectionProps {
  section: FlashSaleSectionType;
}

const FlashSaleSectionComponent: React.FC<FlashSaleSectionProps> = ({ section }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const endTime = new Date(section.endTime).getTime();
      const difference = endTime - now;

      if (difference > 0) {
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [section.endTime]);

  // Get background gradient based on category type but using nest color variations
  const getSectionBgGradient = (categoryType: string) => {
    switch (categoryType) {
      case 'hot-deals':
        return 'bg-gradient-to-r from-nest-red via-red-500 to-red-600';
      case 'smartphone':
        return 'bg-gradient-to-r from-nest-red via-red-600 to-red-700';
      case 'laptop':
        return 'bg-gradient-to-r from-red-500 via-nest-red to-red-600';
      case 'tablet':
        return 'bg-gradient-to-r from-red-600 via-nest-red to-red-500';
      case 'accessories':
        return 'bg-gradient-to-r from-red-400 via-nest-red to-red-600';
      case 'smartwatch':
        return 'bg-gradient-to-r from-red-700 via-nest-red to-red-500';
      case 'group-buy':
        return 'bg-gradient-to-r from-nest-red via-red-400 to-red-600';
      default:
        return 'bg-nest-red';
    }
  };

  return (
    <div className={`${getSectionBgGradient(section.categoryType)} text-white py-6 rounded-2xl shadow-lg overflow-hidden relative`}>
      {/* Background Banner */}
      {section.bannerImage && (
        <div className="absolute inset-0 opacity-10">
          <img 
            src={section.bannerImage} 
            alt={section.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-6">
          <div className="flex items-center mb-4 lg:mb-0">
            <div className="flex items-center space-x-3">
              <div className="bg-white text-nest-red px-6 py-3 rounded-xl font-bold text-2xl shadow-lg border-2 border-white">
                {section.title}
              </div>
              <div className="text-white text-lg font-medium bg-black bg-opacity-20 px-4 py-2 rounded-lg backdrop-blur-sm">
                {section.subtitle}
              </div>
            </div>
          </div>
          
          {/* Countdown Timer */}
          <div className="flex items-center space-x-3 bg-black bg-opacity-20 px-4 py-3 rounded-xl backdrop-blur-sm">
            <span className="text-base font-medium">Kết thúc trong:</span>
            <div className="flex space-x-1">
              <div className="bg-white text-nest-red px-3 py-2 rounded-lg font-bold min-w-[50px] text-center shadow-md border border-gray-200">
                <div className="text-lg leading-none">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs mt-1">Giờ</div>
              </div>
              <div className="text-white text-xl font-bold">:</div>
              <div className="bg-white text-nest-red px-3 py-2 rounded-lg font-bold min-w-[50px] text-center shadow-md border border-gray-200">
                <div className="text-lg leading-none">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs mt-1">Phút</div>
              </div>
              <div className="text-white text-xl font-bold">:</div>
              <div className="bg-white text-nest-red px-3 py-2 rounded-lg font-bold min-w-[50px] text-center shadow-md border border-gray-200">
                <div className="text-lg leading-none">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs mt-1">Giây</div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          {section.products.map((product) => (
            <FlashSaleProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-6">
          <button className="bg-white text-nest-red px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg border-2 border-white transform hover:scale-105">
            Xem tất cả {section.title.replace(/[🔥📱🎧⌚💻👥]/g, '').trim()} →
          </button>
        </div>
      </div>
    </div>
  );
};

interface FlashSaleProductCardProps {
  product: FlashSaleProduct;
}

const FlashSaleProductCard: React.FC<FlashSaleProductCardProps> = ({ product }) => {
  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100)
    : 0;

  const soldPercentage = product.stock && product.sold !== undefined 
    ? Math.min((product.sold / product.stock) * 100, 100)
    : 0;

  return (
    <div className="bg-white rounded-xl p-4 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group border border-gray-100">
      <div className="relative mb-3">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-32 sm:h-36 object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
        />
        {discountPercent > 0 && (
          <div className="absolute top-2 left-2 bg-nest-red text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg border border-red-300">
            -{discountPercent}%
          </div>
        )}
        {/* Hot Badge for high discount */}
        {discountPercent >= 15 && (
          <div className="absolute top-2 right-2 bg-yellow-400 text-red-800 text-xs px-2 py-1 rounded-full font-bold shadow-lg animate-pulse">
            🔥 HOT
          </div>
        )}
      </div>
      
      <h3 className="text-nest-dark text-sm font-medium mb-3 line-clamp-2 h-10 leading-5">
        {product.name}
      </h3>
      
      <div className="space-y-1 mb-3">
        <div className="text-nest-red font-bold text-lg">
          {product.salePrice.toLocaleString('vi-VN')}đ
        </div>
        {product.originalPrice && (
          <div className="flex items-center justify-center gap-2">
            <span className="text-gray-500 text-sm line-through">
              {product.originalPrice.toLocaleString('vi-VN')}đ
            </span>
            {discountPercent > 0 && (
              <span className="text-nest-red text-xs font-bold bg-red-50 px-2 py-1 rounded-full border border-red-200">
                -{discountPercent}%
              </span>
            )}
          </div>
        )}
      </div>
      
      {/* Progress Bar for Stock */}
      {product.stock && product.sold !== undefined && (
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-600 mb-2">
            <span>Đã bán: {product.sold}</span>
            <span>Còn: {product.stock - product.sold}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden border border-gray-300">
            <div
              className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 h-3 rounded-full transition-all duration-700 ease-out shadow-inner"
              style={{
                width: `${soldPercentage}%`
              }}
            />
          </div>
          <div className="text-xs text-gray-600 mt-1 text-center font-medium">
            Đã bán {soldPercentage.toFixed(0)}%
          </div>
        </div>
      )}

      {/* Star Rating */}
      <div className="flex items-center justify-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <span 
            key={i} 
            className={`text-xs ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            ⭐
          </span>
        ))}
        <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
      </div>

      {/* Buy Now Button */}
      <button className="w-full bg-nest-red text-white py-3 px-4 rounded-lg font-bold text-sm hover:bg-red-600 transition-all duration-300 shadow-md transform group-hover:scale-105 border border-red-500">
        <span className="flex items-center justify-center gap-2">
          🛒 Mua ngay
        </span>
      </button>
    </div>
  );
};

export default FlashSale;