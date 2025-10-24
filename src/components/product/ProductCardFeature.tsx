/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Rating } from "../ui/Rating";

export const ProductCardFeature = ({ product }: { product: any }) => {
  return (
    <Link href={product?.link || "/"} className="flex items-center gap-3 group">
      <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200">
        <Image
          src={product.img?.node?.mediaItemUrl || "/images/thumbnail-4.jpg"}
          alt={product?.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-gray-900 group-hover:text-nest-primary line-clamp-2 mb-1">
          {product?.name}
        </h4>
        <Rating rating={product?.rating} />
        <div className="flex items-center gap-2 mt-1">
          <span className="text-base font-bold text-nest-primary">
            ${product?.costSale?.toFixed(2)}
          </span>
          {product?.cost && (
            <span className="text-xs text-gray-400 line-through">
              ${product?.cost?.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};
