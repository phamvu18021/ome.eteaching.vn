'use client';

import React from 'react';
import { AccountDashboardProps } from '@/types/account';
import { DEFAULT_DASHBOARD_STATS, DEFAULT_ORDERS } from '@/constants/account';
import DashboardWelcome from './DashboardWelcome';
import DashboardStatsGrid from './DashboardStatsGrid';

const AccountDashboard: React.FC<AccountDashboardProps> = ({
  userName = 'Dianne',
  stats = DEFAULT_DASHBOARD_STATS,
  recentOrders = DEFAULT_ORDERS,
}) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
        <DashboardWelcome userName={userName} />
        <DashboardStatsGrid stats={stats} />
      </div>
    </div>
  );
};

export default AccountDashboard;