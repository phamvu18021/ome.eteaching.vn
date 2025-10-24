import React, { useState, useRef, useEffect } from 'react';
import { PriceRange } from '@/types/product';

interface PriceFilterProps {
  priceRange: PriceRange;
  onPriceChange: (range: PriceRange) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ priceRange, onPriceChange }) => {
  const [isDragging, setIsDragging] = useState<'min' | 'max' | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const minValue = 0;
  const maxValue = 1000;

  const getPercentage = (value: number) => {
    return ((value - minValue) / (maxValue - minValue)) * 100;
  };

  const getValueFromPercentage = (percentage: number) => {
    return Math.round(minValue + (percentage / 100) * (maxValue - minValue));
  };

  const handleMouseDown = (handle: 'min' | 'max') => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(handle);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
    const value = getValueFromPercentage(percentage);

    if (isDragging === 'min') {
      if (value <= priceRange.max) {
        onPriceChange({ ...priceRange, min: value });
      }
    } else if (isDragging === 'max') {
      if (value >= priceRange.min) {
        onPriceChange({ ...priceRange, max: value });
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(null);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, priceRange]);

  const minPercentage = getPercentage(priceRange.min);
  const maxPercentage = getPercentage(priceRange.max);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <h3 className="text-lg font-bold text-nest-dark mb-4">Fill by price</h3>
      <div className="mt-[20px] flex w-full">
        <div className="w-[80px] border-b-[2px] border-nest-primary"></div>
        <div className="w-full border-b-[1px]"></div>
      </div>
      
      <div className="space-y-6 mt-6">
        {/* Price Range Slider */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="relative h-2 bg-gray-200 rounded-full cursor-pointer"
          >
            {/* Active range */}
            <div
              className="absolute h-2 bg-nest-primary rounded-full"
              style={{
                left: `${minPercentage}%`,
                width: `${maxPercentage - minPercentage}%`
              }}
            />
            
            {/* Min handle */}
            <div
              className="absolute w-5 h-5 bg-white border-2 border-nest-primary rounded-full cursor-pointer transform -translate-y-1/2 top-1/2 shadow-md hover:shadow-lg transition-shadow"
              style={{ left: `${minPercentage}%`, transform: 'translateX(-50%) translateY(-50%)' }}
              onMouseDown={handleMouseDown('min')}
            />
            
            {/* Max handle */}
            <div
              className="absolute w-5 h-5 bg-white border-2 border-nest-primary rounded-full cursor-pointer transform -translate-y-1/2 top-1/2 shadow-md hover:shadow-lg transition-shadow"
              style={{ left: `${maxPercentage}%`, transform: 'translateX(-50%) translateY(-50%)' }}
              onMouseDown={handleMouseDown('max')}
            />
          </div>
          
          {/* Price labels */}
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>${minValue}</span>
            <span>${maxValue}</span>
          </div>
        </div>
        
        {/* Current price range display */}
        <div className="flex items-center justify-center">
          <div className="bg-gray-50 px-4 py-2 rounded-lg">
            <span className="text-sm font-medium text-nest-dark">
              Price: ${priceRange.min} - ${priceRange.max}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;