'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ProductImage } from '@/types/productDetail';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface ProductImageGalleryProps {
  images: ProductImage[];
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
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
      {/* Main Image */}
      <div className="relative rounded-xl border border-gray-200 overflow-hidden aspect-square flex items-center justify-center cursor-zoom-in">
        <Swiper
          modules={[FreeMode, Navigation, Thumbs]}
          spaceBetween={10}
          slidesPerView={1}
          loop={false}
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          className="mySwiperMain"
        >
          {images.map((image) => (
            <SwiperSlide
              key={image.id}
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
              className="flex justify-center items-center"
            >
              <Image
                src={image.url}
                alt={image.alt || ''}
                width={1920}
                height={1920}
                className={`w-full h-full object-contain transition-transform duration-200 ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
                style={{
                  transformOrigin: isZoomed
                    ? `${mousePosition.x}% ${mousePosition.y}%`
                    : 'center',
                }}
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnails */}
      <div className="relative w-full mt-4 max-w-xl mx-auto">
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[FreeMode, Thumbs, Navigation]}
          spaceBetween={8}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          loop={false}
          navigation={{
            nextEl: '#thumb-next',
            prevEl: '#thumb-prev',
          }}
          className="mySwiperThumbs"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id} className="w-24 h-24 cursor-pointer">
              <Image
                src={image.url}
                alt={image.alt || ''}
                width={96}
                height={96}
                className="w-full h-full object-contain border border-gray-200 rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <button
          id="thumb-prev"
          className="absolute z-50 -left-6 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-nest-primary hover:text-white transition"
        >
          <ArrowLeft />
        </button>
        <button
          id="thumb-next"
          className="absolute z-50 -right-6 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-nest-primary hover:text-white transition"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProductImageGallery;
