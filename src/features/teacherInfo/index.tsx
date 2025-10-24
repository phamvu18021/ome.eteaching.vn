/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
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
import { ChevronRight, X, Search } from "lucide-react";
import Breadcrumb from "@/components/product/Breadcrumb";
import Image from "next/image";
import { Rating } from "@/components/ui/Rating";
import Link from "next/link";
import { GET_TEACHER_INFO } from "@/app/api/graphQL/getTeacherInfo";
import { getClient } from "@/lib/apolloClient";
import { getData } from "@/lib/getData";

export default function TeacherInfo({ slug }: { slug: string }) {
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
  const [dataWP, setDataWP] = useState<any>({});
  const [dataOdoo, setDataOdoo] = useState<any>({});
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchDataFromWP = async () => {
      try {
        const { data, errors } = await getClient().query({
          query: GET_TEACHER_INFO,
          variables: { id: slug },
        });

        if (errors || !data?.post) {
          return null;
        }
        const dataRes = data?.post?.teacherInfo;
        setDataWP(dataRes);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    const fetchDataFromOdoo = async () => {
      try {
        const response = await fetch(`/api/teacher-info?slug=${slug}`);
        const dataRes = await response.json();
        setDataOdoo(dataRes?.success ? dataRes?.data : {});
      } catch (error) {
        console.error("Error fetching product from Odoo:", error);
      }
    };
    const fetchProductByTeacher = async () => {
      try {
        const response: any = await fetch("/api/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            teacher_slug: slug,
            category_slugs: "",
          }),
        });
        const dataRes = await response.json();
        const data = dataRes?.success ? dataRes?.data : [];
        setProducts(data);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };
    fetchDataFromOdoo();
    fetchDataFromWP();
    fetchProductByTeacher();
  }, [slug]);

  const sortedProducts = [...products].sort((a, b) => {
    switch (selectedSort) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb items={[{ label: "Khóa học của giáo viên" }]} />
      <div className="container mx-auto px-6 py-16 max-w-[1540px]">
        <p className="text-2xl text-center text-nest-dark lg:text-5xl md:text-4xl font-bold">
          Giảng Viên
        </p>
        <div className="flex mb-16 focus-within:border-nest-primary justify-between  border rounded-full max-w-2xl mx-auto mt-8">
          <input className="px-6 py-4 w-full rounded-full focus:outline-none" />
          <button className="px-8 py-4 rounded-full hover:bg-nest-primary hover:text-white">
            <Search />
          </button>
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
              <div className="px-6 py-8 rounded-lg bg-[#d1e8f2] w-full lg:w-72 mb-6">
                <Image
                  src={dataOdoo?.image_url || "/images/about-8.png"}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="mx-auto w-full h-auto object-contain"
                />
                <p className="mt-8 text-2xl font-bold text-nest-dark line-clamp-1">
                  {dataOdoo?.name || "Nguyen Van A"}
                </p>
                <Rating rating={4} />
                <p className="mt-4 text-nest-gray font-medium text-sm ">
                  {dataOdoo?.desc || "Giao vien"}
                </p>
                <p className="mt-4 text-nest-dark font-bold text-sm ">
                  Theo dõi OME :
                </p>
                <div className="flex gap-2 mt-2 mb-6 w-fit">
                  {dataWP?.socials?.map((item: any, i: number) => (
                    <Link
                      key={i}
                      href={item?.link}
                      className=" w-6 h-6 rounded-full bg-nest-primary flex items-center justify-center"
                    >
                      <i
                        key={i}
                        className={`${
                          item?.icon || "fa-brands fa-facebook"
                        } text-white font-bold text-sm`}
                      ></i>
                    </Link>
                  ))}
                </div>
                {dataWP?.contact?.map((item: any, i: number) => (
                  <div
                    key={i}
                    className="flex gap-2 content-center items-center mt-2 w-fit"
                  >
                    <i
                      className={`${
                        item?.icon || "fa-solid fa-location-dot"
                      } text-nest-primary text-sm`}
                    ></i>
                    <p className="text-nest-gray font-bold text-sm ">
                      {item?.title || "Địa chỉ :"}
                    </p>
                    <p className="text-nest-gray font-medium text-sm ">
                      {item?.sub || "Thanh Xuan, Hanoi"}
                    </p>
                  </div>
                ))}
                <div className="mt-6">
                  <a
                    href={dataWP?.link || "#"}
                    className="mt-6 text-white  bg-nest-primary px-4 py-2 rounded-md hover:bg-nest-secondary font-bold text-sm "
                  >
                    Liên hệ hỗ trợ
                  </a>
                </div>
              </div>
              <ShopSidebar
                categories={PRODUCT_CATEGORIES}
                brands={PRODUCT_BRANDS}
                filterState={filterState}
                onFilterChange={setFilterState}
                featuredProducts={sortedProducts}
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

            <ProductGrid products={sortedProducts} viewMode={viewMode} />

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
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <Cardsix />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
