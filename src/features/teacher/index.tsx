/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import ShopToolbar from "@/components/listProduct/ShopToolbar";
import {
  MOCK_PRODUCTS,
  SORT_OPTIONS,
  SHOP_PAGE_CONFIG,
  PRICE_RANGE,
} from "@/constants/product";
import { FilterState } from "@/types/product";
import Breadcrumb from "@/components/product/Breadcrumb";
import TeacherGrid from "@/components/teacher/TeacherGrid";
import { Search } from "lucide-react";

export default function TeacherPage() {
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
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response: any = await fetch("/api/teachers");
        const dataRes = await response.json();
        const data = dataRes?.success ? dataRes?.data : [];
        setTeachers(data);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb items={[{ label: "Giảng Viên" }]} />
      <div className="container mx-auto px-6 py-16 max-w-[1540px]">
        <p className="text-2xl text-center text-nest-dark lg:text-5xl md:text-4xl font-bold">
          Giảng Viên
        </p>
        <div className="flex mb-16 focus-within:border-nest-primary justify-between border border rounded-full max-w-2xl mx-auto mt-8">
          <input className="px-6 py-4 w-full rounded-full focus:outline-none" />
          <button className="px-8 py-4 rounded-full hover:bg-nest-primary hover:text-white">
            <Search />
          </button>
        </div>
        <ShopToolbar
          totalProducts={teachers.length}
          currentPage={currentPage}
          itemsPerPage={SHOP_PAGE_CONFIG.itemsPerPage}
          sortOptions={SORT_OPTIONS}
          selectedSort={selectedSort}
          viewMode={viewMode}
          onSortChange={setSelectedSort}
          onViewModeChange={setViewMode}
          onFilterToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          feature="Giảng Viên"
        />

        <TeacherGrid teachers={teachers} viewMode={viewMode} />
      </div>
    </div>
  );
}
