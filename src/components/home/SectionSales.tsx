/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ProductCard from '../listProduct/ProductCard';
import { BannerSale } from './BannerSale';


const SectionSales  = ({ data} :{data:any}) => {
  const [activeTab, setActiveTab] = useState<any>(0);
  const product =   {
    id: '1',
    name: 'Seeds of Change Organic Quinoa, Brown',
    slug: 'seeds-of-change-organic-quinoa-brown',
    image: '/images/thumbnail-4.jpg',
    price: 28.85,
    originalPrice: 32.8,
    discount: 12,
    rating: 4.5,
    reviewCount: 25,
    category: 'Vegetables',
    categoryId: 'vegetables',
    brand: 'NestFood',
    inStock: true,
    stockCount: 120,
    shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    isFeatured: true,
    isNew: false,
    isBestSeller: true,
  }
  const dataTabActive = data?.tabs?.find((tab: any, index: number) => index === activeTab);

  return (
    <div className="bg-white max-w-[1540px] p-4 mx-auto ">
        <p className="text-2xl lg:text-3xl font-bold text-nest-dark ">Khuyến mại online</p>
      <div className="border-b mt-8 border-gray-200">
<div className="overflow-x-auto no-scrollbar snap-x snap-mandatory">
  <div className="flex flex-nowrap min-w-max space-x-2 sm:space-x-4">
    {data?.tabs.map((tab:any, index: number) => (
      <button
        key={index}
        onClick={() => setActiveTab(index)}
        className={`px-6 py-4 text-sm font-semibold whitespace-nowrap transition snap-start ${
          activeTab === index
            ? 'text-nest-primary border-b-2 border-nest-primary'
            : 'text-nest-gray hover:text-nest-primary'
        }`}
      >
        {tab?.title}
      </button>
    ))}
  </div>
</div>

      </div>

      <div className="p-2 lg:p-6">
        <Image
          src={dataTabActive?.banner?.node?.mediaItemUrl || "/images/banner-sale.png"}
          alt="Product"
          width={1200}
          height={600}
          className="object-contain w-full h-auto rounded-sm"
        />  
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
    {[...Array(8)].map((_, index) => (
    <ProductCard key={index} product={product} />
    ))}
        </div>
      <a href={dataTabActive?.link || "/"} className='text-nest-primary hover:text-nest-secondary hover:cursor-pointer text-center font-semibold mt-8'>Xem thêm</a>
      </div>
      <BannerSale data={data?.banners} />
    </div>
  );
};

export default SectionSales;