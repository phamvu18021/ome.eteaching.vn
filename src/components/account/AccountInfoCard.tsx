'use client';

import React from 'react';
import { AccountInfoCardProps } from '@/types/account';

const AccountInfoCard: React.FC<AccountInfoCardProps> = ({
  icon,
  title,
  value,
  bgColor,
  iconColor,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-nest-primary/30 transition-all duration-300 group">
      <div className="flex items-center gap-4">
        <div className={`w-16 h-16 ${bgColor} rounded-xl flex items-center justify-center ${iconColor} group-hover:scale-110 transition-transform duration-300`}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
          </svg>
        </div>
        <div>
          <p className="text-nest-gray text-sm mb-1.5 font-medium">{title}</p>
          <p className="text-3xl font-bold text-nest-dark">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountInfoCard;