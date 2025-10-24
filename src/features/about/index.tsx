/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import Breadcrumb from "@/components/product/Breadcrumb";
import { getData } from "@/lib/getData";
import { GET_ABOUT } from "@/app/api/graphQL/getAbout";
import AboutHero from "@/components/about/AboutHero";
import AboutTeamSection from "@/components/about/AboutTeamSection";
import AboutFeatureSection from "@/components/about/AboutFeatureSection";
import AboutCountSection from "@/components/about/AboutCountSection";
import AboutTeacherSection from "@/components/about/AboutTeacherSection";

export default function AboutPage() {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getData(GET_ABOUT);
        setData(data?.pageBy?.about || {});
      } catch (error) {
        console.error("Error fetching event data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Giới thiệu", href: "/ve-ome" },
        ]}
      />
      <div className="container mx-auto px-6 py-16">
        <AboutHero data={data} />
        <AboutTeamSection data={data} />
        <AboutFeatureSection data={data} />
        <AboutCountSection data={data} />
        <AboutTeacherSection data={data} />
      </div>
    </div>
  );
}
