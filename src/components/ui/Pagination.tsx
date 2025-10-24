"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number | string) => void;
}) => {
  const pages: (number | string)[] = [];

  // hiển thị [1,2,3,...,totalPages]
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      pages.push(i);
    } else if (
      (i === currentPage - 2 && currentPage > 3) ||
      (i === currentPage + 2 && currentPage < totalPages - 2)
    ) {
      pages.push("...");
    }
  }

  return (
<div >
        <div className="flex items-center gap-2 w-fit mx-auto lg:mx-0">
      {/* Prev */}
      <div className="w-[40px] h-[40px] ">
        <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className="w-[40px] h-[40px] flex items-center hover:text-white justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-nest-primary disabled:opacity-50"
        disabled={currentPage === 1}
      >
        <ChevronLeft  size={18} />
      </button>
      </div>

      {/* Pages */}
      {pages.map((page, index) =>
        page === "..." ? (
          <span key={index} className="w-[40px] h-[40px] flex items-center justify-center text-gray-400">
            ...
          </span>
        ) : (
          <div key={index} className="w-[40px] h-[40px]">
            <button
            onClick={() => onPageChange(page)}
            className={`w-[40px] h-[40px]  flex font-bold items-center justify-center rounded-full ${
              page === currentPage
                ? "bg-nest-primary text-white"
                : "bg-gray-100 text-gray-600 hover:text-white hover:bg-nest-primary"
            }`}
          >
            {page}
          </button>
          </div>
        )
      )}

      {/* Next */}
<div className="w-[40px] h-[40px]">
          <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-nest-primary hover:text-white disabled:opacity-50"
        disabled={currentPage === totalPages}
      >
        <ChevronRight size={18} />
      </button>
</div>
    </div>
</div>
  );
};

export default Pagination;
