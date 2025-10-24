'use client'; 
import React from "react";
import { useRouter } from "next/navigation";

const PromoCard = ({data}:{data:any}) => {
  const router = useRouter();
  return (
    <div
      className="relative rounded-2xl overflow-hidden flex items-center justify-between p-8"
      style={{
        backgroundImage:
          `url(${data?.img?.node?.mediaItemUrl || "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-3.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Text Section */}
      <div className="max-w-sm px-4 py-12 text-left text-gray-800">
        <h2 className="text-2xl font-semibold leading-snug mb-4">
      {data?.title || "Make your Breakfast <br /> Healthy and Easy"}
        </h2>
        <button onClick={() => router.push(`${data?.link || "/san-pham" }`)} className="bg-nest-primary hover:bg-nest-secondary hover:-translate-y-2 duration-300 mt-8  text-white text-sm px-4 py-1 font-semibold  rounded-md transition-all">
          Shop Now →
        </button>
      </div>
    </div>
  );
};

export default PromoCard;
