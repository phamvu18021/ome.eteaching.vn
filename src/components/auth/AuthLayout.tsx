import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AuthLayoutProps {
  title: string;
  linkText: string;
  linkLabel: string;
  linkHref: string;
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  title,
  linkText,
  linkLabel,
  linkHref,
  imageSrc,
  imageAlt,
  children,
}) => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 md:space-x-12 md:grid-cols-2 py-[100px] max-w-4xl mx-auto px-8">
        <Image
          width={500}
          height={500}
          src={imageSrc}
          alt={imageAlt}
          className="rounded-[30px] hidden md:block w-auto object-contain"
        />
        
        <div className="flex items-center justify-center bg-white">
          <div className="w-full">
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-2">{title}</h1>
            <p className="text-gray-600 mb-8">
              {linkText}{' '}
              <Link
                href={linkHref}
                className="text-green-600 font-semibold hover:text-green-700"
              >
                {linkLabel}
              </Link>
            </p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;