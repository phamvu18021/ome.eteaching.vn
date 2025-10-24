import { DashboardStats, Order } from '@/types/account';

export const DEFAULT_DASHBOARD_STATS: DashboardStats = {
  totalOrders: 265,
  pendingOrders: 10,
  completedOrders: 242,
};

export const DEFAULT_ORDERS: Order[] = [
  {
    id: '2357',
    date: 'March 15, 2025',
    total: '$125.00',
    status: 'processing',
    items: 3,
  },
  {
    id: '2356',
    date: 'March 12, 2025',
    total: '$250.00',
    status: 'completed',
    items: 2,
  },
  {
    id: '2355',
    date: 'March 8, 2025',
    total: '$178.00',
    status: 'completed',
    items: 4,
  },
  {
    id: '2354',
    date: 'March 5, 2025',
    total: '$89.50',
    status: 'cancelled',
    items: 1,
  },
  {
    id: '2353',
    date: 'March 1, 2025',
    total: '$425.00',
    status: 'completed',
    items: 5,
  },
];

export const ACCOUNT_INFO_CARDS_CONFIG = [
  {
    icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
    title: 'Total Order',
    statsKey: 'totalOrders' as const,
    bgColor: 'bg-purple-50',
    iconColor: 'text-nest-purple',
  },
  {
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Pending Orders',
    statsKey: 'pendingOrders' as const,
    bgColor: 'bg-yellow-50',
    iconColor: 'text-nest-secondary',
  },
  {
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Completed Orders',
    statsKey: 'completedOrders' as const,
    bgColor: 'bg-green-50',
    iconColor: 'text-nest-primary',
  },
];