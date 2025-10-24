/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getCategoryDataBySlug } from "@/utils/getCategory";

const CategoryFilter = () => {
  const params = useParams(); // ⬅️ Lấy toàn bộ param từ URL
  const slug = params?.slug as string;
  const [dataCategories, setDataCategories] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("/api/categories");
        const dataRes = await data.json();
        console.log(dataRes);
        const dataCategorys = dataRes?.success ? dataRes?.data : [];
        setDataCategories(dataCategorys);
      } catch (error) {
        console.error("Error fetching event data:", error);
      } finally {
      }
    };
    fetchData();
  }, [slug]);
  console.log(dataCategories);
  const categories = getCategoryDataBySlug(dataCategories, slug).visible;

  return (
    <div className="bg-white ">
      <h3 className="text-2xl font-bold text-nest-dark mb-4">
        Danh mục sản phẩm
      </h3>
      <div className="mt-[20px] flex w-full">
        <div className="w-[80px] border-b-[2px] border-nest-primary"></div>
        <div className="w-full border-b-[1px] "></div>
      </div>
      <ul className="space-y-2 mt-4">
        {categories.map((category) => (
          <li
            className="border rounded-md hover:border-green-200"
            key={category.id}
          >
            <Link
              href={`/khoa-hoc-dao-tao/${category.slug}`}
              className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                slug === category?.slug
                  ? "bg-nest-light-green text-nest-primary font-semibold"
                  : "hover:bg-gray-50 text-gray-700"
              }`}
            >
              <span>{category.name}</span>
              <span className="text-xs leading-6 text-white rounded-full bg-nest-primary text-center w-6 h-6">
                {category?.product_count}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
