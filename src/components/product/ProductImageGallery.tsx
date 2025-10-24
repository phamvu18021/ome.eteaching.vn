"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProductImage } from "@/types/productDetail";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

interface ProductImageGalleryProps {
  images: ProductImage[];
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  images,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div className="flex flex-col gap-4">
      {/* MAIN IMAGE */}
      <div
        className="relative bg-white rounded-xl border border-gray-200 overflow-hidden aspect-square flex items-center justify-center cursor-zoom-in"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <Swiper
          modules={[FreeMode, Thumbs]}
          spaceBetween={20}
          loop={true}
          thumbs={{ swiper: thumbsSwiper }}
          onSwiper={setMainSwiper}
          className="mainSwiper"
        >
          {images?.map((image) => (
            <SwiperSlide key={image.id} className="w-full h-full">
              <Image
                src={image?.img?.node?.mediaItemUrl || "/jskdfhjks.svg"}
                alt={image?.img?.node?.mediaItemUrl || ""}
                width={1920}
                height={1920}
                className={`w-full h-full object-contain transition-transform duration-200 ${
                  isZoomed ? "scale-150" : "scale-100"
                }`}
                style={{
                  transformOrigin: isZoomed
                    ? `${mousePosition.x}% ${mousePosition.y}%`
                    : "center",
                }}
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* THUMBNAILS + NAVIGATION */}
      <div className="relative w-full mt-4 max-w-xl mx-auto">
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[FreeMode, Thumbs, Navigation]}
          watchSlidesProgress
          freeMode
          slidesPerView={4}
          spaceBetween={8}
          className="thumbSwiper"
        >
          {images?.map((image, index) => (
            <SwiperSlide key={image.id} className="w-24 h-24 cursor-pointer">
              <Image
                src={image?.img?.node?.mediaItemUrl || "/jskdfhjks.svg"}
                alt={image?.img?.node?.mediaItemUrl || ""}
                width={96}
                height={96}
                className="w-full h-full object-contain rounded-lg border border-gray-200 hover:border-nest-primary transition"
                onClick={() => mainSwiper?.slideToLoop(index)} // ✅ click thumbnail = đổi ảnh chính
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* NAVIGATION BUTTONS nằm dưới nhưng điều khiển MAIN */}
        <button
          onClick={() => mainSwiper?.slidePrev()}
          className="absolute z-50 -left-6 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-nest-primary hover:text-white transition"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={() => mainSwiper?.slideNext()}
          className="absolute z-50 -right-6 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-nest-primary hover:text-white transition"
        >
          <ArrowRight />
        </button>
      </div>

      <style jsx global>{`
        .thumbSwiper .swiper-slide-thumb-active {
          border: 2px solid #3bb77e !important;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default ProductImageGallery;
