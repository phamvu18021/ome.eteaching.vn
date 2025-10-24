'use client';
import React from 'react';
import ProductCard from '../listProduct/ProductCard';



const PopularProducts = ({data}:{data:any}) => {
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
  return (
<div className='mt-8 px-4'>
      <div className=" max-w-[1540px] py-4 mx-auto  rounded-lg mb-8">

 <div className='flex  flex-col lg:flex-row justify-between items-start lg:items-end gap-4 content-center'>
           <h2 className="text-2xl lg:text-3xl mr-8 font-semibold text-nest-dark ">
      {data?.title || "Sản phẩm phổ biến"}
      </h2>
<div className="overflow-x-auto no-scrollbar snap-x snap-mandatory">
          <div className="flex flex-nowrap min-w-max space-x-2 sm:space-x-4">
{data?.tags?.map((item: any, index: number) => (
        <p
          key={index}
          className="text-nest-dark hover:text-nest-primary hover:cursor-pointer hover:-translate-y-1 duration-300 text-sm lg:text-md font-semibold"
        > {item?.title || "Y học cổ truyền"}</p>
      ))}
      </div>
</div>
</div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
    {[...Array(8)].map((_, index) => (
    <ProductCard key={index} product={product} />
    ))}
        </div>
    </div>
</div>
  );
};

export default PopularProducts;