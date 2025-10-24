'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import PromoCard from './PromoCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import getRandomPrimaryColor from '@/utils/randomColor';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';


const SectionProductCategory = ({data}:{data:any}) => {
  return (
<div className='mt-8 px-4'>
      <div className=" max-w-[1540px] py-8 mx-auto  rounded-lg mb-8">
<div className='flex justify-between mb-12'>
 <div className='flex  flex-col lg:flex-row justify-between items-start lg:items-end gap-4 content-center'>
           <h2 className="text-2xl lg:text-3xl mr-8 font-semibold text-nest-dark ">
        {data?.title || "Danh mục sản phẩm"}
      </h2>
      <div className='flex items-center gap-4'>
{ data?.tags?.map((item: any, index: number) => (
        <a
        href={item?.link || "/"}
          key={index}
          className="text-nest-dark decoration-none hover:text-nest-primary hover:cursor-pointer hover:-translate-y-1 duration-300 text-sm lg:text-md font-semibold"
    >{item?.title || "Y học cổ truyền"}</a>
      ))}
      </div>
 </div>
      <div className='hidden md:flex items-center gap-4'>
        
              {/* Swiper Navigation Buttons */}
              <button
                id="swiper-category-prev"
                className="group z-50  bg-[#F2F3F4] p-2 rounded-full shadow hover:bg-nest-primary hover:text-white transition"
              >
                <ArrowLeft className="text-nest-primary group-hover:text-white font-bold" />
              </button>
              <button
                id="swiper-category-next"
                className=" group z-50  bg-[#F2F3F4] p-2 rounded-full shadow hover:bg-nest-primary hover:text-white transition"
              >
                <ArrowRight className="text-nest-primary group-hover:text-white font-bold" />
              </button>
      </div>
</div>
              <Swiper
                navigation={{ nextEl: '#swiper-category-next', prevEl: '#swiper-category-prev' }}
                spaceBetween={20}
                loop
                style={{ marginTop: '40px', width: '100%' }}
                modules={[EffectFade, Navigation, Autoplay]}
                breakpoints={{
                  0: {
                    slidesPerView: 2 // 👈 Mobile
                  },
                  768: {
                    slidesPerView: 4 // 👈 iPad / tablet
                  },
                  1024: {
                    slidesPerView: 4 // 👈 Laptop trở lên
                  },
                  1280: {
                    slidesPerView: 8 // 👈 Desktop
                  }
                }}
              >
                {data?.categorycards?.map((item : any, index: number) => {
                    const color = getRandomPrimaryColor();
                    return (
                  <SwiperSlide key={index}>
                    <div style={{ backgroundColor: color }} className='p-4 text-center group hover:shadow-lg hover:cursor-pointer  rounded-lg'>
                        <Image
                          src={item?.img?.node?.mediaItemUrl || '/images/cat-9.png'}
                          alt={`Product ${index}`}
                          width={200}
                          height={300}
                          className="object-contain px-2 h-auto w-full"
                        />
                      <p className='text-nest-dark text-lg font-semibold group-hover:text-nest-primary'> {item?.title || "Y học cổ truyện"}</p>
                      <p> {item?.sub || "150 khóa học"} </p>
                    </div>
                  </SwiperSlide>
                )})}
              </Swiper>
              <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12'>
        {data?.promoCards?.map((item: any, index: number) => (
        <PromoCard data={item} key={index} />
        ))}
              </div>
    </div>
</div>
  );
};

export default SectionProductCategory;