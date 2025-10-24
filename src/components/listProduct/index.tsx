/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import ShopSidebar from "@/components/listProduct/ShopSidebar";
import ShopToolbar from "@/components/listProduct/ShopToolbar";
import ProductGrid from "@/components/listProduct/ProductGrid";
import {
  MOCK_PRODUCTS,
  PRODUCT_CATEGORIES,
  PRODUCT_BRANDS,
  SORT_OPTIONS,
  SHOP_PAGE_CONFIG,
  PRICE_RANGE,
} from "@/constants/product";
import { FilterState } from "@/types/product";
import Cardsix from "@/components/listProduct/CardDeal";
import { ChevronRight } from "lucide-react";
import Breadcrumb from "@/components/product/Breadcrumb";
import { BreadcrumbHeader } from "@/components/ui/BreadcrumbHeader";

export default function ShopPage({
  data,
  products,
}: {
  data: any;
  products: any;
}) {
  console.log(data);
  const [filterState, setFilterState] = useState<FilterState>({
    priceRange: PRICE_RANGE,
    selectedBrands: [],
    selectedRating: 0,
    selectedCategory: "",
    studyDuration: { min: 0, max: 100 },
  });
  const [selectedSort, setSelectedSort] = useState(
    SHOP_PAGE_CONFIG.defaultSort
  );
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const featuredProducts = MOCK_PRODUCTS.filter(
  //   (product) => product.isFeatured
  // ).slice(0, 3);

  // const filteredProducts = MOCK_PRODUCTS.filter((product) => {
  //   const matchesPrice =
  //     product.price >= filterState.priceRange.min &&
  //     product.price <= filterState.priceRange.max;

  //   const matchesBrand =
  //     filterState.selectedBrands.length === 0 ||
  //     (product.brand && filterState.selectedBrands.includes(product.brand));

  //   const matchesRating =
  //     filterState.selectedRating === 0 ||
  //     product.rating >= filterState.selectedRating;

  //   return matchesPrice && matchesBrand && matchesRating;
  // });

  const sortedProducts = [products].sort((a, b) => {
    switch (selectedSort) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
      default:
        return 0;
    }
  });

  return (
    <div className="bg-white min-h-screen">
      <BreadcrumbHeader
        tags={data?.breacrumb?.tag}
        items={[{ label: "Sản phẩm" }]}
        header={data?.breacrumb?.title || "Sản phẩm"}
      />
      <div className="container mx-auto px-6 py-16 max-w-[1540px]">
        <div className="mb-6">
          <h1 className="text-2xl lg:text-4xl font-bold text-nest-dark mb-2">
            Shop
          </h1>
          <p className="text-gray-600">Browse our collection of products</p>
        </div>

        <div
          className="flex flex-col lg:flex-row gap-6"
          id="shop-main-container"
        >
          <aside
            className={`fixed lg:static inset-0 z-50 lg:z-0 bg-white lg:bg-transparent transition-transform duration-300 ${
              isSidebarOpen
                ? "translate-x-0"
                : "translate-x-full lg:translate-x-0"
            } lg:sticky lg:top-4 lg:self-start overflow-y-auto lg:overflow-visible`}
          >
            <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-nest-dark">Bộ lọc</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="lg:p-0">
              <ShopSidebar
                categories={PRODUCT_CATEGORIES}
                brands={PRODUCT_BRANDS}
                filterState={filterState}
                onFilterChange={setFilterState}
                featuredProducts={products}
              />
            </div>
          </aside>

          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          <main className="flex-1 lg:min-w-0">
            <ShopToolbar
              totalProducts={sortedProducts.length}
              currentPage={currentPage}
              itemsPerPage={SHOP_PAGE_CONFIG.itemsPerPage}
              sortOptions={SORT_OPTIONS}
              selectedSort={selectedSort}
              viewMode={viewMode}
              onSortChange={setSelectedSort}
              onViewModeChange={setViewMode}
              onFilterToggle={() => setIsSidebarOpen(!isSidebarOpen)}
              feature="sản phẩm"
            />

            <ProductGrid products={products} viewMode={viewMode} />

            {/* Ưu mãi trong ngày section - inside main content */}
            <div className="py-[60px]">
              <div className="flex justify-between align-center items-center mb-8">
                <h2 className="text-2xl lg:text-4xl font-bold text-nest-dark">
                  Ưu mãi trong ngày
                </h2>
                <p className="text-gray-600 hover:text-nest-primary flex items-center hover:cursor-pointer">
                  {"Xem tất cả"}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Cardsix />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
