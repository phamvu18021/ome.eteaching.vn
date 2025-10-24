/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import ProductImageGallery from "@/components/product/ProductImageGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductTabs from "@/components/product/ProductTabs";
import RelatedProducts from "@/components/product/RelatedProducts";
import { MOCK_PRODUCT_DETAIL, MOCK_PRODUCTS } from "@/constants/product";
import ShopSidebar from "@/components/listProduct/ShopSidebar";
import {
  PRODUCT_CATEGORIES,
  PRODUCT_BRANDS,
  PRICE_RANGE,
} from "@/constants/product";
import { FilterState } from "@/types/product";
import { X } from "lucide-react";
import Breadcrumb from "@/components/product/Breadcrumb";

export default function ProductDetailPage({
  dataOdoo,
  dataWP,
}: {
  dataOdoo: any;
  dataWP: any;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filterState, setFilterState] = useState<FilterState>({
    priceRange: PRICE_RANGE,
    selectedBrands: [],
    selectedRating: 0,
    selectedCategory: "",
    studyDuration: { min: 0, max: 100 },
  });

  // In a real app, you would fetch the product based on the slug
  // For now, we'll use the mock data
  const product = MOCK_PRODUCT_DETAIL;

  // Find related products from the same category
  const relatedProducts = MOCK_PRODUCTS.slice(0, 4);

  // const featuredProducts = MOCK_PRODUCTS.filter(
  //   (product) => product.isFeatured
  // ).slice(0, 3);

  const breadcrumbItems = [
    { label: "Sản phẩm", href: "/san-pham" },
    { label: dataOdoo?.name },
  ];

  if (!dataOdoo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-nest-dark mb-4">
            Sản phẩm không tồn tại
          </h1>
          <p className="text-nest-gray">
            Sản phẩm bạn đang tìm kiếm không được tìm thấy.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb items={breadcrumbItems} />

      <div className="container mx-auto px-6 py-16 max-w-[1540px]">
        <div className="flex flex-col lg:flex-row gap-6">
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* Main Content */}
          <main className="flex-1 lg:min-w-0">
            {/* Product Detail Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Product Images */}
              <div>
                <ProductImageGallery images={dataWP?.productInfo?.listimg} />
              </div>

              {/* Product Info */}
              <div>
                <ProductInfo product={dataOdoo} />
              </div>
            </div>

            {/* Product Tabs */}
            <div className="mb-16">
              <ProductTabs product={dataWP?.productInfo} />
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div className="mb-16">
                <RelatedProducts products={relatedProducts} />
              </div>
            )}
          </main>
          {/* Sidebar */}
          <aside
            className={`fixed lg:static inset-0 z-50 lg:z-0 bg-white lg:bg-transparent transition-transform duration-300 ${
              isSidebarOpen
                ? "translate-x-0"
                : "translate-x-full lg:translate-x-0"
            } lg:sticky lg:top-4 lg:self-start overflow-y-auto lg:overflow-visible`}
          >
            <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-nest-dark">Thông tin</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="lg:p-0">
              {/* Filters */}
              <ShopSidebar
                categories={PRODUCT_CATEGORIES}
                brands={PRODUCT_BRANDS}
                filterState={filterState}
                onFilterChange={setFilterState}
                featuredProducts={relatedProducts}
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
