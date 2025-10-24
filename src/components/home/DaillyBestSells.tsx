'use client';
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import CardProductBestSell from "./CardProductBestSell";
import { useRouter } from 'next/navigation'

export const DaillyBestSells = ({data}:{data : any}) => {
  const router = useRouter()
const product = {
id: '1',
name: 'Seeds of Change Organic Quinoa, Brown',
slug: 'seeds-of-change-organic-quinoa-brown',
image: '/images/thumbnail-4.jpg',
price: 28.85,
originalPrice: 32.8,
discount: 12,
rating: 4.5,
reviewCount: 25,
category: 'Vegetables',
categoryId: 'vegetables',
brand: 'NestFood',
inStock: true,
stockCount: 120,
shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
isFeatured: true,
isNew: false,
isBestSeller: true,
};

return ( <div className="mx-auto max-w-[1540px] px-4"> 
<p className="text-2xl lg:text-3xl font-bold text-nest-dark mb-4">{data?.title || "Bán chạy mỗi ngày" }</p>

  <div className="flex flex-col lg:flex-row justify-between w-full mt-12 gap-4">
    {/* Banner trái */}
    <div
      className="basis-[25%] hidden lg:block min-h-[300px] rounded-xl"
      style={{
        backgroundImage: `url(${data?.img?.node?.mediaItemUrl || "/images/banner-4.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="p-12">
      <p className="text-4xl font-bold text-nest-dark ">{data?.content || "Bring nature into your home"}</p>
        <button onClick={() => router.push(`${data?.link || "/san-pham" }`)} className="bg-nest-primary text-white text-sm font-semibold py-1 px-4 rounded-md mt-16 hover:bg-nest-secondary">
            Mua ngay
        </button>
      </div>
    </div>
    {/* Swiper phải */}
{/* Swiper phải */}
<div className="basis-[75%] flex-1 relative w-full overflow-hidden rounded-lg">
  <div className="w-full overflow-hidden">
    <Swiper
      autoplay={{ delay: 3000 }}
      navigation={{
        nextEl: '#swiper-best-sells-next',
        prevEl: '#swiper-best-sells-prev',
      }}
      spaceBetween={20}
      loop
      modules={[EffectFade, Navigation, Autoplay]}
      className="!w-full"
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {[...Array(8)].map((_, index) => (
        <SwiperSlide key={index}>
          <CardProductBestSell product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* Swiper Navigation Buttons */}
  <button
    id="swiper-best-sells-prev"
    className="absolute group z-50 left-6 top-1/2 -translate-y-1/2 bg-[#F2F3F4] p-2 rounded-full shadow hover:bg-nest-primary hover:text-white transition"
  >
    <ArrowLeft className="text-nest-primary group-hover:text-white font-bold" />
  </button>
  <button
    id="swiper-best-sells-next"
    className="absolute group z-50 right-6 top-1/2 -translate-y-1/2 bg-[#F2F3F4] p-2 rounded-full shadow hover:bg-nest-primary hover:text-white transition"
  >
    <ArrowRight className="text-nest-primary group-hover:text-white font-bold" />
  </button>
</div>

  </div>
</div>

);
};
