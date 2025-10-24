'use client';

import React from 'react';
import { Grid, List, Filter, ChevronDown } from 'lucide-react';
import { SortOption } from '@/types/product';

interface ShopToolbarProps {
  totalProducts: number;
  feature: string;
  currentPage: number;
  itemsPerPage: number;
  sortOptions: SortOption[];
  selectedSort: string;
  viewMode: 'grid' | 'list';
  onSortChange: (sort: string) => void;
  onViewModeChange: (mode: 'grid' | 'list') => void;
  onFilterToggle?: () => void;
}

const ShopToolbar: React.FC<ShopToolbarProps> = ({
  totalProducts,
  currentPage,
  itemsPerPage,
  sortOptions,
  selectedSort,
  viewMode,
  onSortChange,
  onViewModeChange,
  onFilterToggle,
  feature
}) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalProducts);

  return (
    <div className="bg-white  rounded-lg p-4 mb-6">
      {/* Mobile Toolbar */}
      <div className="lg:hidden flex items-center justify-between">
        <button
          onClick={onFilterToggle}
          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Filter className="w-4 h-4" />
          <span className="text-sm font-medium">Bộ lọc</span>
        </button>
        
        <div className="text-sm text-gray-600">
          {startItem}-{endItem} của {totalProducts}
        </div>
      </div>

      {/* Desktop Toolbar */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* Results Count */}
          <div className="hidden lg:block text-md text-nest-gray font-semibold">
            Hiện tại chúng tôi có <span className="font-bold text-nest-primary">{totalProducts}</span> {feature}
          </div>
        </div>

        <div className="flex  items-center gap-4 w-full lg:w-auto justify-between lg:justify-end">
          {/* View Mode Toggle */}
          <div className="hidden md:flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`p-2 transition-colors ${
                viewMode === 'grid'
                  ? 'bg-nest-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`p-2 transition-colors ${
                viewMode === 'list'
                  ? 'bg-nest-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={selectedSort}
              onChange={(e) => onSortChange(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:border-nest-primary min-w-[160px]"
            >
              {sortOptions.map((option) => (
                <option  key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopToolbar;