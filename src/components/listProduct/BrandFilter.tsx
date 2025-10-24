import React from 'react';

interface BrandFilterProps {
  brands: string[];
  selectedBrands: string[];
  onBrandToggle: (brand: string) => void;
}

const BrandFilter: React.FC<BrandFilterProps> = ({ brands, selectedBrands, onBrandToggle }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <h3 className="text-lg font-bold text-nest-dark mb-4">Brand</h3>
        <div className="mt-[20px] flex w-full">
          <div className="w-[80px] border-b-[2px] border-nest-primary"></div>
          <div className="w-full border-b-[1px] "></div>
        </div>
      <div className="space-y-2 mt-4 max-h-64 overflow-y-auto">
        {brands.map((brand) => (
          <label key={brand} className="flex items-center gap-2 cursor-pointer hover:text-nest-primary">
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => onBrandToggle(brand)}
              className="w-4 h-4 text-nest-primary border-gray-300 rounded focus:ring-nest-primary"
            />
            <span className="text-sm text-gray-700">{brand}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default BrandFilter;