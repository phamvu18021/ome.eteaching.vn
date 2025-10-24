import React from 'react';
import { Product } from '@/types/product';
import { ProductCardFeature } from '../product/ProductCardFeature';

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-bold text-nest-dark mb-4">Featured products</h3>
        <div className="mt-[20px] flex w-full">
          <div className="w-[80px] border-b-[2px] border-nest-primary"></div>
          <div className="w-full border-b-[1px] "></div>
        </div>
      <div className="space-y-4 mt-4">
        {products.map((product) => (
          <ProductCardFeature key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;