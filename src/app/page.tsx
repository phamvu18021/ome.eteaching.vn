/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import ProductSeen from "@/components/home/ProductSeen";
import { Slide } from "@/components/home/Slide";
import SectionProductCategory from "@/components/home/SectionProductCategory";
import SectionSales from "@/components/home/SectionSales";
import PopularProducts from "@/components/home/PopularProducts";
import { DaillyBestSells } from "@/components/home/DaillyBestSells";
import DealOfTheDay from "@/components/home/DealOfTheDay";
import { SectionTopTrend } from "@/components/home/SectionTopTrend";
import { getData } from "@/lib/getData";
import { GET_HOME } from "@/app/api/graphQL/getHome";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>({});
  const images = [
    {
      url: "/images/slider-1.png",
      alt: "Slide 1",
      title: "welcome to Nest",
      description: "The best e-commerce app in the world",
    },
    {
      url: "/images/slider-2.png",
      alt: "Slide 2",
      title: "welcome to Nest sdf",
      description: "The best e-commerce app in the world 43",
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getData(GET_HOME);

        setData(data?.pageBy?.home || {});
      } catch (error) {
        console.error("Error fetching event data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <main className="flex-1">
        <div className=" mx-auto">
          <Slide data={data?.sliders} />
          <ProductSeen />
          <SectionProductCategory data={data?.section2} />
          <SectionSales data={data?.section3} />
          <PopularProducts data={data?.popularProducts} />
          <DaillyBestSells data={data?.bestSellers} />
          <DealOfTheDay />
          <SectionTopTrend data={data?.toptrend} />
        </div>
      </main>
    </>
  );
}
