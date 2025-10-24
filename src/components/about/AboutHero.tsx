/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function AboutHero({ data }: { data: any }) {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center mb-18 max-w-[1340px] mx-auto">
      <div>
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={data?.section1?.img?.node?.mediaItemUrl || '/images/about-1.jpg'}
            alt="About us"
            width={500}
            height={500}
            className="w-full h-auto rounded-xl shadow-xl"
          />
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <h2 className="text-2xl md:text-4xl font-bold text-nest-dark mb-6 leading-tight">
          {data?.section1?.name || 'Câu chuyện của chúng tôi'}
        </h2>

        {data?.section1?.listsub?.map((item: any, index: number) => (
          <p key={index} className="text-nest-gray mb-6 leading-relaxed text-lg">
            {item?.sub || 'Chúng tôi là một công ty thương mại điện tử hàng đầu chuyên cung cấp các sản phẩm.'}
          </p>
        ))}

        <div className="relative w-full mt-4 max-w-full mx-auto">
          <Swiper
            autoplay={{ delay: 3000 }}
            navigation={{ nextEl: '#swiper-next', prevEl: '#swiper-prev' }}
            spaceBetween={20}
            loop
            style={{ marginTop: '40px', width: '100%' }}
            modules={[EffectFade, Navigation, Autoplay]}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
            }}
          >
            {data?.listImg?.map((item: any, index: number) => (
              <SwiperSlide key={index}>
                <Image
                  src={item?.node?.mediaItemUrl || '/images/about-1.jpg'}
                  alt="slide"
                  width={1000}
                  height={1000}
                  className="h-auto w-full object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper Navigation Buttons */}
          <button
            id="swiper-prev"
            className="absolute group z-50 -left-6 top-1/2 -translate-y-1/2 bg-[#F2F3F4] p-2 rounded-full shadow hover:bg-nest-primary hover:text-white transition"
          >
            <ArrowLeft className="text-nest-primary group-hover:text-white font-bold" />
          </button>
          <button
            id="swiper-next"
            className="absolute group z-50 -right-6 top-1/2 -translate-y-1/2 bg-[#F2F3F4] p-2 rounded-full shadow hover:bg-nest-primary hover:text-white transition"
          >
            <ArrowRight className="text-nest-primary group-hover:text-white font-bold" />
          </button>
        </div>
      </div>
    </div>
  );
}
