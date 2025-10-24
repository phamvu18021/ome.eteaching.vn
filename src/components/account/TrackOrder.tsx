'use client';

import { useState } from 'react';

interface TrackOrderProps {}

export default function TrackOrder({}: TrackOrderProps) {
  const [orderNumber, setOrderNumber] = useState('');

  const handleTrack = () => {
    console.log('Tracking order:', orderNumber);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
      <h3 className="text-2xl font-bold text-nest-dark mb-2">Track Your Order</h3>
      <p className="text-nest-gray mb-8">
        To track your order please enter your OrderID in the box below and press "Track" button. This
        was given to you on your receipt and in the confirmation email you should have received.
      </p>

      <div className="max-w-2xl">
        <div className="mb-6">
          <label htmlFor="orderNumber" className="block text-sm font-semibold text-nest-dark mb-2">
            Order Number
          </label>
          <input
            type="text"
            id="orderNumber"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            placeholder="Found in your order confirmation email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nest-primary focus:border-transparent text-nest-dark"
          />
        </div>

        <button
          onClick={handleTrack}
          className="w-full md:w-auto px-8 py-3 bg-nest-primary text-white font-semibold rounded-lg hover:bg-background-hover transition-colors"
        >
          Track Order
        </button>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-start gap-4 p-6 bg-nest-light-gray rounded-xl">
          <div className="flex-shrink-0 w-12 h-12 bg-nest-primary/10 rounded-lg flex items-center justify-center text-nest-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-nest-dark mb-1">Order Confirmed</h4>
            <p className="text-sm text-nest-gray">Your order has been placed</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-6 bg-nest-light-gray rounded-xl">
          <div className="flex-shrink-0 w-12 h-12 bg-nest-blue/10 rounded-lg flex items-center justify-center text-nest-blue">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-nest-dark mb-1">Shipped</h4>
            <p className="text-sm text-nest-gray">Your order is on the way</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-6 bg-nest-light-gray rounded-xl">
          <div className="flex-shrink-0 w-12 h-12 bg-nest-primary/10 rounded-lg flex items-center justify-center text-nest-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-nest-dark mb-1">Delivered</h4>
            <p className="text-sm text-nest-gray">Order has been delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
}