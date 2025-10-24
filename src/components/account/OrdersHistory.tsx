'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface OrderItem {
  id: string;
  date: string;
  status: 'completed' | 'pending' | 'processing' | 'cancelled';
  total: string;
  items: number;
  deliveryDate?: string;
}

interface OrdersHistoryProps {
  orders?: OrderItem[];
  itemsPerPage?: number;
}

const defaultOrders: OrderItem[] = [
  {
    id: '2357',
    date: 'March 15, 2025',
    status: 'processing',
    total: '$125.00',
    items: 3,
    deliveryDate: 'March 20, 2025',
  },
  {
    id: '2356',
    date: 'March 12, 2025',
    status: 'completed',
    total: '$250.00',
    items: 2,
  },
  {
    id: '2355',
    date: 'March 8, 2025',
    status: 'completed',
    total: '$178.00',
    items: 4,
  },
  {
    id: '2354',
    date: 'March 5, 2025',
    status: 'cancelled',
    total: '$89.50',
    items: 1,
  },
  {
    id: '2353',
    date: 'March 1, 2025',
    status: 'completed',
    total: '$425.00',
    items: 5,
  },
  {
    id: '2352',
    date: 'February 28, 2025',
    status: 'completed',
    total: '$156.00',
    items: 2,
  },
  {
    id: '2351',
    date: 'February 25, 2025',
    status: 'processing',
    total: '$89.00',
    items: 1,
    deliveryDate: 'March 2, 2025',
  },
  {
    id: '2350',
    date: 'February 20, 2025',
    status: 'completed',
    total: '$320.00',
    items: 6,
  },
];

export default function OrdersHistory({ orders = defaultOrders, itemsPerPage = 5 }: OrdersHistoryProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOrders = orders.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const getStatusStyle = (status: OrderItem['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-nest-primary/10 text-nest-primary';
      case 'pending':
        return 'bg-nest-secondary/20 text-nest-secondary';
      case 'processing':
        return 'bg-nest-blue/10 text-nest-blue';
      case 'cancelled':
        return 'bg-nest-red/10 text-nest-red';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusLabel = (status: OrderItem['status']) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-nest-dark">Orders History</h3>
        <p className="text-nest-gray">{orders.length} Orders</p>
      </div>

      <div className="overflow-x-auto -mx-6 md:mx-0">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-6 text-sm font-bold text-nest-dark uppercase tracking-wide">
                  Order
                </th>
                <th className="text-left py-4 px-6 text-sm font-bold text-nest-dark uppercase tracking-wide">
                  Date
                </th>
                <th className="text-left py-4 px-6 text-sm font-bold text-nest-dark uppercase tracking-wide">
                  Status
                </th>
                <th className="text-left py-4 px-6 text-sm font-bold text-nest-dark uppercase tracking-wide">
                  Total
                </th>
                <th className="text-center py-4 px-6 text-sm font-bold text-nest-dark uppercase tracking-wide">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-100 hover:bg-nest-light-gray/50 transition-colors"
                >
                  <td className="py-5 px-6 text-sm font-semibold text-nest-dark">
                    #{order.id}
                  </td>
                  <td className="py-5 px-6">
                    <div className="text-sm text-nest-gray">{order.date}</div>
                    {order.deliveryDate && (
                      <div className="text-xs text-nest-gray/70 mt-0.5">
                        Delivery: {order.deliveryDate}
                      </div>
                    )}
                  </td>
                  <td className="py-5 px-6">
                    <span
                      className={`inline-flex px-3 py-1.5 text-xs font-semibold rounded-full ${getStatusStyle(
                        order.status
                      )}`}
                    >
                      {getStatusLabel(order.status)}
                    </span>
                  </td>
                  <td className="py-5 px-6">
                    <div className="text-sm font-bold text-nest-dark">{order.total}</div>
                    <div className="text-xs text-nest-gray mt-0.5">
                      for {order.items} item{order.items > 1 ? 's' : ''}
                    </div>
                  </td>
                  <td className="py-5 px-6 text-center">
                    <button className="inline-flex items-center gap-1.5 px-4 py-2 bg-nest-primary text-white text-sm font-semibold rounded-lg hover:bg-background-hover transition-colors">
                      View Details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-6">
          <div className="text-sm text-nest-gray">
            Showing {startIndex + 1} to {Math.min(endIndex, orders.length)} of {orders.length} orders
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 border-2 border-gray-200 text-nest-gray rounded-lg hover:border-nest-primary hover:text-nest-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-nest-gray"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                    currentPage === page
                      ? 'bg-nest-primary text-white'
                      : 'border-2 border-gray-200 text-nest-gray hover:border-nest-primary hover:text-nest-primary'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border-2 border-gray-200 text-nest-gray rounded-lg hover:border-nest-primary hover:text-nest-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-nest-gray"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}