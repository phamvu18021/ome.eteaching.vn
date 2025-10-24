import React from 'react';
import ProductCard from './ProductCard';
import { ProductGridProps } from '@/types/product';
import Pagination from '../ui/Pagination';

const ProductGrid: React.FC<ProductGridProps> = ({ products, viewMode = 'grid' }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Không tìm thấy sản phẩm nào</p>
      </div>
    );
  }

  if (viewMode === 'list') {
    return (
      <div className="bg-white ">
        <div className="space-y-6 mb-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} viewMode="list" />
          ))}
        </div>
        <Pagination currentPage={1} totalPages={2} onPageChange={() => {}} />
      </div>
    );
  }

  return (
    <div className="bg-white ">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} viewMode="grid" />
        ))}
      </div>
      <Pagination currentPage={1} totalPages={2} onPageChange={() => {}} />
    </div>
  );
};

export default ProductGrid;