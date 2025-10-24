/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import {
  Star,
  Heart,
  ShoppingCart,
  Repeat,
  Share2,
  Truck,
  RotateCcw,
  Shield,
} from "lucide-react";
import { Rating } from "../ui/Rating";

const ProductInfo = ({ product }: { product: any }) => {
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes?.[0]?.value || ""
  );
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= product.stockCount) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="space-y-6">
      {product?.discount_percent_from_promotion && (
        <span className="inline-block bg-nest-red text-white px-4 py-1 rounded-full text-sm font-semibold">
          Sale Off
        </span>
      )}

      <div>
        <h1 className="text-3xl lg:text-4xl font-bold text-nest-dark mb-3">
          {product?.name}
        </h1>

        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1">
            <Rating rating={4.5} />
            <span className="text-nest-gray text-sm ml-1">({25} đánh giá)</span>
          </div>
        </div>
      </div>

      <div className="flex items-baseline gap-3">
        <span className="text-4xl font-bold text-nest-primary">
          {product?.price?.toLocaleString("vi-VN")}đ
        </span>
        {product?.price_after_promotion && (
          <>
            <span className="text-2xl text-gray-400 line-through">
              {product?.price_after_promotion?.toLocaleString("vi-VN")}đ
            </span>
            <span className="bg-nest-secondary/20 text-nest-secondary px-3 py-1 rounded-full text-sm font-semibold">
              {product?.discount_percent_from_promotion}% Off
            </span>
          </>
        )}
      </div>

      <div className="border-t border-b border-gray-200 py-4">
        <p className="text-nest-gray leading-relaxed">{product?.description}</p>
      </div>

      {product?.sizes && product?.sizes?.length > 0 && (
        <div>
          <label className="block text-sm font-semibold text-nest-dark mb-3">
            Size / Weight:
          </label>
          <div className="flex flex-wrap gap-2">
            {product?.sizes.map((size: any) => (
              <button
                key={size.value}
                onClick={() => size.inStock && setSelectedSize(size.value)}
                disabled={!size.inStock}
                className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition ${
                  selectedSize === size.value
                    ? "border-nest-primary bg-nest-primary/10 text-nest-primary"
                    : size.inStock
                    ? "border-gray-200 hover:border-nest-primary text-nest-dark"
                    : "border-gray-200 text-gray-400 cursor-not-allowed opacity-50"
                }`}
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-4">
        <div className="flex items-center border-2 border-gray-200 rounded-lg">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="px-4 py-3 hover:bg-gray-50 transition font-semibold text-nest-dark"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => {
              const val = parseInt(e.target.value) || 1;
              if (val >= 1 && val <= product.stockCount) {
                setQuantity(val);
              }
            }}
            className="w-16 text-center border-x-2 border-gray-200 py-3 font-semibold text-nest-dark focus:outline-none"
            min="1"
            max={product.stockCount}
          />
          <button
            onClick={() => handleQuantityChange(1)}
            className="px-4 py-3 hover:bg-gray-50 transition font-semibold text-nest-dark"
          >
            +
          </button>
        </div>

        <button className="flex-1 flex items-center justify-center gap-2 bg-nest-primary hover:bg-background-hover text-white px-8 py-3 rounded-lg font-semibold transition">
          <ShoppingCart className="w-5 h-5" />
          <span>Add to cart</span>
        </button>

        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`p-3 border-2 rounded-lg transition ${
            isWishlisted
              ? "border-nest-red bg-nest-red/10 text-nest-red"
              : "border-gray-200 hover:border-nest-red text-gray-400 hover:text-nest-red"
          }`}
        >
          <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
        </button>

        <button className="p-3 border-2 border-gray-200 rounded-lg hover:border-nest-primary text-gray-400 hover:text-nest-primary transition">
          <Repeat className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-nest-light-gray rounded-lg">
        <div className="flex items-center gap-3">
          <Truck className="w-6 h-6 text-nest-primary flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-nest-dark">
              Free Delivery
            </p>
            <p className="text-xs text-nest-gray">For all orders over $50</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <RotateCcw className="w-6 h-6 text-nest-primary flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-nest-dark">
              90 Days Return
            </p>
            <p className="text-xs text-nest-gray">If goods have problems</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6 text-nest-primary flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-nest-dark">
              Secure Payment
            </p>
            <p className="text-xs text-nest-gray">100% secure payment</p>
          </div>
        </div>
      </div>

      <div className="space-y-3 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-sm text-nest-gray">SKU:</span>
          <span className="text-sm font-semibold text-nest-dark">
            {product?.info?.sku || ""}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-nest-gray">Category:</span>
          <span className="text-sm font-semibold text-nest-primary hover:text-background-hover cursor-pointer">
            {product?.info?.category}
          </span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-sm text-nest-gray">Tags:</span>
          <div className="flex flex-wrap gap-2">
            {product?.info?.tags &&
              product?.info?.tags?.map((tag: any, index: number) => (
                <span
                  key={index}
                  className="text-sm font-semibold text-nest-dark hover:text-nest-primary cursor-pointer"
                >
                  {tag}
                  {index < product.info.tags.length - 1 && ","}
                </span>
              ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-nest-gray">Share:</span>
          <div className="flex gap-2">
            {["facebook", "twitter", "instagram", "pinterest"].map((social) => (
              <button
                key={social}
                className="w-8 h-8 rounded-full bg-nest-primary/10 hover:bg-nest-primary text-nest-primary hover:text-white transition flex items-center justify-center"
              >
                <Share2 className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
