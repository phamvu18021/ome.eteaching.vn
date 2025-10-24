'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

interface RangeSliderProps {
  min: number;
  max: number;
  step?: number;
  value: { min: number; max: number };
  onChange: (value: { min: number; max: number }) => void;
  formatValue?: (value: number) => string;
  className?: string;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  min,
  max,
  step = 1,
  value,
  onChange,
  formatValue = (val) => val.toString(),
  className = ''
}) => {
  const [isDragging, setIsDragging] = useState<'min' | 'max' | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  const getValue = useCallback(
    (percent: number) => {
      const newValue = Math.round(((percent / 100) * (max - min) + min) / step) * step;
      return Math.min(Math.max(newValue, min), max);
    },
    [min, max, step]
  );

  const handleMouseDown = (type: 'min' | 'max') => (event: React.MouseEvent) => {
    event.preventDefault();
    setIsDragging(type);
  };

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!isDragging || !sliderRef.current) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const percent = ((event.clientX - rect.left) / rect.width) * 100;
      const newValue = getValue(percent);

      if (isDragging === 'min') {
        onChange({
          min: Math.min(newValue, value.max),
          max: value.max
        });
      } else {
        onChange({
          min: value.min,
          max: Math.max(newValue, value.min)
        });
      }
    },
    [isDragging, getValue, onChange, value]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(null);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const minPercent = getPercent(value.min);
  const maxPercent = getPercent(value.max);

  return (
    <div className={`relative ${className}`}>
      {/* Track */}
      <div
        ref={sliderRef}
        className="relative h-2 bg-gray-200 rounded-lg cursor-pointer"
      >
        {/* Active track */}
        <div
          className="absolute h-2 bg-nest-primary rounded-lg"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`
          }}
        />
        
        {/* Min thumb */}
        <div
          className="absolute w-5 h-5 bg-nest-primary border-2 border-white rounded-full shadow-md cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
          style={{
            left: `${minPercent}%`,
            top: '50%'
          }}
          onMouseDown={handleMouseDown('min')}
        />
        
        {/* Max thumb */}
        <div
          className="absolute w-5 h-5 bg-nest-primary border-2 border-white rounded-full shadow-md cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
          style={{
            left: `${maxPercent}%`,
            top: '50%'
          }}
          onMouseDown={handleMouseDown('max')}
        />
      </div>
      
      {/* Values */}
      <div className="flex justify-between text-sm text-gray-600 mt-2">
        <span>{formatValue(value.min)}</span>
        <span>{formatValue(value.max)}</span>
      </div>
    </div>
  );
};

export default RangeSlider;