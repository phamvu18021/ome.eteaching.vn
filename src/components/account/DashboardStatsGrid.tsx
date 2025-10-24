'use client';

import React from 'react';
import AccountInfoCard from './AccountInfoCard';
import { DashboardStats } from '@/types/account';
import { ACCOUNT_INFO_CARDS_CONFIG } from '@/constants/account';

interface DashboardStatsGridProps {
  stats: DashboardStats;
}

const DashboardStatsGrid: React.FC<DashboardStatsGridProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {ACCOUNT_INFO_CARDS_CONFIG.map((config) => (
        <AccountInfoCard
          key={config.statsKey}
          icon={config.icon}
          title={config.title}
          value={stats[config.statsKey].toString()}
          bgColor={config.bgColor}
          iconColor={config.iconColor}
        />
      ))}
    </div>
  );
};

export default DashboardStatsGrid;