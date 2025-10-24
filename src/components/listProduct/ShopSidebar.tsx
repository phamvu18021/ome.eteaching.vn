"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import CategoryFilter from "./CategoryFilter";
import FeaturedProducts from "./FeaturedProducts";
import RangeSlider from "@/components/ui/RangeSlider";
import { ShopSidebarProps, Product, FilterState } from "@/types/product";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setFilterState,
  clearAllFilters as clearReduxFilters,
} from "@/store/slices/filterSlice";
import { X, Star, Filter } from "lucide-react";

const ShopSidebar: React.FC<
  ShopSidebarProps & { featuredProducts?: Product[] }
> = ({
  categories,
  brands,
  selectedCategoryId,
  filterState,
  onFilterChange,
  featuredProducts = [],
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const reduxFilterState = useAppSelector((state) => state.filters);

  const [tempFilterState, setTempFilterState] = useState<FilterState>({
    priceRange: reduxFilterState.priceRange,
    selectedBrands: reduxFilterState.selectedBrands,
    selectedRating: reduxFilterState.selectedRating,
    selectedCategory: reduxFilterState.selectedCategory || "",
    studyDuration: reduxFilterState.studyDuration || { min: 0, max: 100 },
  });
  const sidebarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync temp filter state with actual filter state
  useEffect(() => {
    setTempFilterState({
      priceRange: filterState.priceRange,
      selectedBrands: filterState.selectedBrands,
      selectedRating: filterState.selectedRating,
      studyDuration: filterState.studyDuration || { min: 0, max: 100 },
    });
  }, [filterState]);

  const handleTempPriceChange = (value: number, type: "min" | "max") => {
    setTempFilterState({
      ...tempFilterState,
      priceRange: {
        ...tempFilterState.priceRange,
        [type]: value,
      },
    });
  };

  const handleTempRatingChange = (value: number) => {
    setTempFilterState({ ...tempFilterState, selectedRating: value });
  };

  const handleTempStudyDurationChange = (
    value: number,
    type: "min" | "max"
  ) => {
    const currentDuration = tempFilterState.studyDuration || {
      min: 0,
      max: 100,
    };
    setTempFilterState({
      ...tempFilterState,
      studyDuration: {
        ...currentDuration,
        [type]: value,
      },
    });
  };

  const applyFilters = () => {
    // Save to Redux
    dispatch(setFilterState(tempFilterState));

    // Apply local filters
    onFilterChange(tempFilterState);

    // Navigate to main shop page with filters applied
    const searchParams = new URLSearchParams();

    // Add price range
    if (tempFilterState.priceRange.min > 0) {
      searchParams.set("priceMin", tempFilterState.priceRange.min.toString());
    }
    if (tempFilterState.priceRange.max < 10000000) {
      searchParams.set("priceMax", tempFilterState.priceRange.max.toString());
    }

    // Add brands
    if (tempFilterState.selectedBrands.length > 0) {
      searchParams.set("brands", tempFilterState.selectedBrands.join(","));
    }

    // Add rating
    if (tempFilterState.selectedRating > 0) {
      searchParams.set("rating", tempFilterState.selectedRating.toString());
    }

    // Add category
    if (tempFilterState.selectedCategory) {
      searchParams.set("category", tempFilterState.selectedCategory);
    }

    // Add study duration
    if (tempFilterState.studyDuration) {
      if (tempFilterState.studyDuration.min > 0) {
        searchParams.set(
          "durationMin",
          tempFilterState.studyDuration.min.toString()
        );
      }
      if (tempFilterState.studyDuration.max < 100) {
        searchParams.set(
          "durationMax",
          tempFilterState.studyDuration.max.toString()
        );
      }
    }

    const queryString = searchParams.toString();
    const url = queryString
      ? `/danh-muc-san-pham?${queryString}`
      : "/danh-muc-san-pham";

    router.push(url);
  };

  const clearAllFilters = () => {
    const clearState = {
      priceRange: { min: 0, max: 10000000 },
      selectedBrands: [],
      selectedRating: 0,
      selectedCategory: "",
      studyDuration: { min: 0, max: 100 },
    };
    setTempFilterState(clearState);
    dispatch(clearReduxFilters());
    onFilterChange(clearState);
  };

  const hasActiveFilters =
    filterState.selectedBrands.length > 0 ||
    filterState.selectedRating > 0 ||
    filterState.priceRange.min > 0 ||
    filterState.priceRange.max < 10000000 ||
    (filterState.studyDuration &&
      (filterState.studyDuration.min > 0 ||
        filterState.studyDuration.max < 100));

  const hasChanges =
    JSON.stringify(tempFilterState) !==
    JSON.stringify({
      priceRange: filterState.priceRange,
      selectedBrands: filterState.selectedBrands,
      selectedRating: filterState.selectedRating,
      studyDuration: filterState.studyDuration || { min: 0, max: 100 },
    });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <div
      ref={containerRef}
      className="w-full lg:w-72 space-y-6 lg:sticky lg:top-4 lg:self-start"
    >
      {/* Categories - Separate from filters */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <CategoryFilter />
      </div>

      {/* Filter Section */}
      <div
        ref={sidebarRef}
        className="w-full p-6 lg:w-72 bg-white rounded-lg border border-gray-200"
      >
        {/* Filter Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-nest-dark">Bộ lọc</h3>
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="text-sm text-nest-primary hover:text-nest-primary/80 transition-colors"
            >
              Xóa tất cả
            </button>
          )}
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="p-4 border-b bg-gray-50">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Đang áp dụng:
            </h4>
            <div className="flex flex-wrap gap-2">
              {filterState.selectedBrands.map((brand, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-nest-primary/10 text-nest-primary"
                >
                  {brand}
                  <button
                    className="ml-1 hover:text-nest-primary/70"
                    onClick={() =>
                      onFilterChange({
                        ...filterState,
                        selectedBrands: filterState.selectedBrands.filter(
                          (b) => b !== brand
                        ),
                      })
                    }
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              {filterState.selectedRating > 0 && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-nest-primary/10 text-nest-primary">
                  {filterState.selectedRating}+ sao
                  <button
                    className="ml-1 hover:text-nest-primary/70"
                    onClick={() =>
                      onFilterChange({ ...filterState, selectedRating: 0 })
                    }
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>
          </div>
        )}

        {/* Filter Content */}
        <div className="p-4 space-y-6">
          {/* Price Range Slider */}
          <div>
            <h4 className="font-medium text-nest-dark mb-3">Khoảng giá</h4>
            <RangeSlider
              min={0}
              max={10000000}
              step={100000}
              value={tempFilterState.priceRange}
              onChange={(priceRange) =>
                setTempFilterState({ ...tempFilterState, priceRange })
              }
              formatValue={formatPrice}
              className="px-3"
            />
          </div>

          {/* Rating - Keep as radio buttons */}
          <div>
            <h4 className="font-medium text-nest-dark mb-3">Đánh giá</h4>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <label
                  key={rating}
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    name="rating"
                    checked={tempFilterState.selectedRating === rating}
                    onChange={() => handleTempRatingChange(rating)}
                    className="mr-3 text-nest-primary focus:ring-nest-primary"
                  />
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-700">
                      từ {rating} sao
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Study Duration Slider */}
          <div>
            <h4 className="font-medium text-nest-dark mb-3">Thời lượng học</h4>
            <RangeSlider
              min={0}
              max={100}
              step={5}
              value={tempFilterState.studyDuration || { min: 0, max: 100 }}
              onChange={(studyDuration) =>
                setTempFilterState({ ...tempFilterState, studyDuration })
              }
              formatValue={(value) => `${value}h`}
              className="px-3"
            />
          </div>
        </div>

        {/* Apply Filter Button */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={applyFilters}
            disabled={!hasChanges}
            className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-colors ${
              hasChanges
                ? "bg-nest-primary text-white hover:bg-nest-primary/90"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            <Filter className="w-4 h-4" />
            <span>Áp dụng bộ lọc</span>
          </button>
        </div>
      </div>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <div className="bg-white rounded-lg border border-gray-200">
          <FeaturedProducts products={featuredProducts} />
        </div>
      )}
    </div>
  );
};

export default ShopSidebar;
