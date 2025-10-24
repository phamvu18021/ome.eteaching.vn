'use client';

import React from 'react';

interface ProgressBarProps {
sold: number;
total: number;
}

const ProgressBarWithSold: React.FC<ProgressBarProps> = ({ sold, total }) => {
const percentage = (sold / total) * 100;

return ( <div className="w-full"> <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
<div
className="h-2 bg-nest-primary rounded-full transition-all duration-500"
style={{ width: `${percentage}%` }}
></div> </div> <p className="text-sm text-gray-700 mt-2">Sold: {sold}/{total}</p> </div>
);
};

export default ProgressBarWithSold;
