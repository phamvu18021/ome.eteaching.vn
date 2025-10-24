/* eslint-disable @typescript-eslint/no-explicit-any */
import { Home, X } from "lucide-react";
import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  header: string;
  tags: string[];
}

export const BreadcrumbHeader: React.FC<BreadcrumbProps> = ({
  items,
  header,
  tags,
}) => {
  console.log(tags);
  return (
    <div className="max-w-[1540px] mt-6  lg:mx-auto px-6">
      <div
        className="rounded-2xl  p-16 flex flex-row justify-between gap-8 bg-cover items-center bg-center"
        style={{ backgroundImage: "url('/images/header-bg.png')" }}
      >
        <div className="flex flex-col">
          {/* Title */}
          <h2 className="text-2xl lg:text-4xl  font-bold text-nest-dark">
            {header}
          </h2>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-green-600 mt-4 ">
            <Home className="w-4 h-4" />
            <Link href="/" className="hover:text-nest-secondary font-bold">
              Trang chủ
            </Link>
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-nest-secondary font-bold"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-nest-gray font-bold ">
                    {item.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex-wrap gap-3 h-fit hidden lg:flex items-end">
          {tags?.map((tag: any, i: number) => (
            <a
              href={tag?.type || "/"}
              key={i}
              className="flex items-center gap-2 bg-white rounded-full shadow px-6 py-3 text-nest-primary font-bold cursor-pointer hover:text-nest-secondary hover:-translate-y-2 duration-300"
            >
              <X className="w-4 h-4 text-gray-400 hover:text-red-500" />
              {tag?.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
