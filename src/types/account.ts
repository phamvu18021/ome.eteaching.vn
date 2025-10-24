export interface Order {
  id: string;
  date: string;
  total: string;
  status: 'completed' | 'pending' | 'processing' | 'cancelled';
  items?: number;
}

export interface DashboardStats {
  totalOrders: number;
  pendingOrders: number;
  completedOrders: number;
}

export interface AccountDashboardProps {
  userName?: string;
  stats?: DashboardStats;
  recentOrders?: Order[];
}

export interface AccountInfoCardProps {
  icon: string;
  title: string;
  value: string;
  bgColor: string;
  iconColor: string;
}