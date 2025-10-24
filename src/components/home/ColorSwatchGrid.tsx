import React from 'react';
import { ColorSwatch } from '@/types/home';

interface ColorSwatchGridProps {
  swatches: ColorSwatch[];
}

const ColorSwatchGrid: React.FC<ColorSwatchGridProps> = ({ swatches }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      {swatches.map((swatch) => (
        <div
          key={swatch.colorValue}
          className={`${swatch.className} p-4 rounded-lg ${swatch.textColor}`}
        >
          <h3 className="font-bold">{swatch.name}</h3>
          <p className="text-sm">{swatch.colorValue}</p>
        </div>
      ))}
    </div>
  );
};

export default ColorSwatchGrid;