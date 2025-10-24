"use client";

import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";

export default function DealCard() {
  return (
    <div className="group relative w-full h-fit z-0 mx-auto">
      {/* Wrapper relative để chứa cả countdown + content */}
      {/* Product Image */}
      <Image
        src="/images/banner-5.png"
        alt="Product"
        className="w-full h-auto object-contain rounded-xl"
        width={300}
        height={300}
      />

      {/* Overlay Countdown */}
      <div className="absolute h-fit group-hover:-translate-y-2 duration-300 inset-0 w-[90%] mx-auto top-[18%]  ">
        <div className="flex gap-2 px-4">
          {[
            { value: "00", label: "Days" },
            { value: "00", label: "Hours" },
            { value: "00", label: "Mins" },
            { value: "00", label: "Sec" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-2 w-full rounded-md shadow flex flex-col items-center justify-center text-green-600 font-bold text-sm"
            >
              {item.value}
              <span className="text-gray-600 text-[11px] font-normal">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className=" w-full h-fit translate-y-[-90px]">
        <div className="group-hover:-translate-y-2 duration-300 bg-white w-[90%] mx-auto rounded-lg hover:cursor-pointer shadow p-4  z-50">
          <h6 className="text-nest-dark font-bold mb-2 text-sm hover:text-nest-primary">
            Seeds of Change Organic Quinoa, Brown
          </h6>
          {/* Rating */}
          <div className="flex items-center mb-1">
            <div className="flex text-yellow-400">
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} className="text-gray-300" />
            </div>
            <span className="ml-2 text-gray-500 text-xs">(4.0)</span>
          </div>

          <p className="text-xs text-gray-600 mb-2">
            By{" "}
            <span className="text-green-600 font-semibold hover:text-nest-secondary">
              NestFood
            </span>
          </p>

          {/* Price + Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h6 className="text-green-600 font-semibold">$32.85</h6>
              <del className="text-gray-400 text-sm">$33.8</del>
            </div>
            <button className="flex items-center gap-1 px-4 py-1.5 bg-green-100 hover:bg-nest-primary hover:text-white text-green-600 text-sm rounded-md transition-colors">
              <ShoppingCart size={16} /> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
