/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export const Slide = ({ data }: { data: any[] }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      // Gán lại navigation sau khi DOM có nút
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      // Destroy → init → update để Swiper nhận ref
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="w-full  mx-auto px-4 mt-8">
      <div className="relative group max-w-[1540px] w-full mt-4 mx-auto">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={1}
          spaceBetween={8}
          loop
          style={{ overflow: 'hidden' }}
        >
          {data?.map((item: any, index:number) => (
            <SwiperSlide key={index}>
                <div className='relative w-full'>
                    <Image
                        src={item?.img?.node?.mediaItemUrl || '/images/banner-4.png'}
                        alt={item?.img?.node?.mediaItemUrl || ''}
                        width={1920}
                        height={1080}
                        className="w-full h-auto object-cover rounded-xl"
                        />
                    <div className='absolute top-0 left-0 right-0 bottom-0'>
                        <div className='items-start max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl  p-4 md:p-8  xl:px-12 xl:py-16 '>
                    <p className='text-xl md:text-3xl lg:text-5xl font-bold text-nest-dark '>{item?.title}</p>
                            <p className='text-sm md:text-md lg:text-lg mt-0 lg:mt-2 xl:mt-4 font-semibold text-nest-gray '>{item?.content}</p>
                                      <form className="flex bg-white rounded-full mt-2 md:mt-4 lg:mt-6 xl:mt-8 overflow-hidden shadow max-w-[300px] md:max-w-md">
            <div className="flex  items-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12H8m0 0l4-4m-4 4l4 4"
                />
              </svg>
            </div>
            <input
              type="email"
              placeholder="số điện thoại"
              className=" p-0 md:px-4 md:py-4 flex-1 focus:outline-none text-sm text-gray-900"
            />
            <button
              type="submit"
              className="bg-nest-primary rounded-full text-sm px-4 hover:bg-green-700 text-white  font-semibold"
            >
              Subscribe
            </button>
          </form>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Nút điều hướng */}
        <button
          ref={prevRef}
          className="absolute hidden md:flex items-center justify-center w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-50 left-8 top-1/2 -translate-y-1/2 bg-[#f2f3f4] rounded-full shadow hover:bg-nest-primary hover:text-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          ref={nextRef}
          className="absolute hidden md:flex items-center justify-center w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-50 right-8 top-1/2 -translate-y-1/2 bg-[#f2f3f4] rounded-full shadow hover:bg-nest-primary hover:text-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
