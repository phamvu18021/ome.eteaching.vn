'use client';

import React from 'react';

interface DashboardWelcomeProps {
  userName: string;
}

const DashboardWelcome: React.FC<DashboardWelcomeProps> = ({ userName }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-nest-dark mb-3">
        Hello {userName}!
      </h2>
      <p className="text-nest-gray text-[15px] leading-relaxed">
        From your account dashboard. you can easily check & view your{' '}
        <span className="text-nest-primary font-semibold">Recent Orders</span>, manage your{' '}
        <span className="text-nest-primary font-semibold">Shipping and Billing Addresses</span> and{' '}
        <span className="text-nest-primary font-semibold">edit your Password and Account Details</span>.
      </p>
    </div>
  );
};

export default DashboardWelcome;