/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { Metadata } from "next";
import ShopPage from "@/components/listProduct";
import { getData } from "@/lib/getData";
import { GET_PRODUCTS } from "@/app/api/graphQL/getProducts";
import { useParams } from "next/navigation";

// export const metadata: Metadata = {
//   title: 'Danh mục sản phẩm - OME E-Teaching',
//   description: 'Khám phá các khóa học và sản phẩm giáo dục chất lượng cao tại OME E-Teaching. Tìm kiếm theo danh mục, giá cả và đánh giá.',
// }

export default function Page() {
  const [data, setData] = useState<any>({});
  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const params = useParams(); // ⬅️ Lấy toàn bộ param từ URL
  const slug = params?.slug as string;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getData(GET_PRODUCTS);
        setData(data?.pageBy?.products || {});
      } catch (error) {
        console.error("Error fetching event data:", error);
      } finally {
        setLoading(false);
      }
    };
    const fetchProducts = async () => {
      try {
        const response: any = await fetch("/api/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            teacher_slug: "",
            category_slugs: slug,
          }),
        });
        const dataRes = await response.json();
        const data = dataRes?.success ? dataRes?.data : [];
        setProducts(data);
      } catch (error) {
        console.error("Error fetching event data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    fetchProducts();
  }, [slug]);
  return <ShopPage products={products} data={data} />;
}
