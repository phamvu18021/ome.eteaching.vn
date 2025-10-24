'use client';
import React from 'react';
import { CardProductSeen } from './CardProductSeen';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';


const ProductSeen = () => {
  return (
<div className='mt-8 px-4'>
      <div className="bg-nest-light-gray max-w-[1540px] p-8 mx-auto  rounded-lg mb-8">
<div className='flex justify-between'>
        <h2 className="text-2xl lg:text-3xl font-semibold text-nest-dark mb-4">
        Sản phẩm đã xem
      </h2>
      <p className="text-nest-gray text-sm font-medium">
        Xóa lich sử
      </p>
</div>
            <div className="relative w-full mt-4 max-w-full mx-auto">
              <Swiper
                autoplay={{ delay: 3000}}
                navigation={{ nextEl: '#swiper-next', prevEl: '#swiper-prev' }}
                spaceBetween={20}
                loop
                style={{ marginTop: '10px', width: '100%' }}
                modules={[EffectFade, Navigation, Autoplay]}
                breakpoints={{
                  0: {
                    slidesPerView: 1 // 👈 Mobile
                  },
                  768: {
                    slidesPerView: 3 // 👈 iPad / tablet
                  },
                  1024: {
                    slidesPerView: 4 // 👈 Laptop trở lên
                  },
                  1280: {
                    slidesPerView: 5 // 👈 Desktop
                  }
                }}
              >
                {[...Array(8)].map((_, index) => (
                  <SwiperSlide key={index}>
                    <CardProductSeen item={{}}
                     />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Swiper Navigation Buttons */}
              <button
                id="swiper-prev"
                className="absolute hidden md:block group z-50 -left-6 top-1/2 -translate-y-1/2 bg-[#F2F3F4] p-2 rounded-full shadow hover:bg-nest-primary hover:text-white transition"
              >
                <ArrowLeft className="text-nest-primary group-hover:text-white font-bold" />
              </button>
              <button
                id="swiper-next"
                className="absolute hidden md:block group z-50 -right-6 top-1/2 -translate-y-1/2 bg-[#F2F3F4] p-2 rounded-full shadow hover:bg-nest-primary hover:text-white transition"
              >
                <ArrowRight className="text-nest-primary group-hover:text-white font-bold" />
              </button>
            </div>
    </div>
</div>
  );
};

export default ProductSeen;