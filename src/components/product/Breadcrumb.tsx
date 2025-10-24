'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className='shadow-md'>
    <div className="flex max-w-[1540px] mx-auto py-6  px-6 items-center space-x-2 text-sm text-gray-600">
      <Link href="/" className="hover:text-nest-primary transition-colors">
        Trang chủ
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          {item.href ? (
            <Link href={item.href} className="hover:text-nest-primary transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-nest-primary font-medium ">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </div>
    </div>

  );
};

export default Breadcrumb;