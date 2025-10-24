'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


export const BannerSale = ({data}:{data:any}) => {
    return (
        <div className="w-full group mx-auto  mt-8">
            <div className=" max-w-[1540px] w-full mt-4 mx-auto">
                <Swiper
                    autoplay={{ delay: 3000}}
                    spaceBetween={20}
                    loop
                    style={{ marginTop: '10px', width: '100%' }}
                    modules={[ Autoplay]}
                >
{data?.map((item: any, index:number) => (
                        <SwiperSlide key={index}>
                       <div className='grid grid-cols-2 gap-4 lg:gap-6'>
                         <Image
                        src={item?.img1?.node?.mediaItemUrl || "/images/bs-1.png"}
                            alt="Banner"
                            width={500}
                            height={500}
                            className="w-full h-auto rounded-md lg:rounded-xl "
                        />
                         <Image
                            src={item?.img2?.node?.mediaItemUrl || "/images/bs-2.png"}
                            alt="Banner"
                            width={500}
                            height={500}
                            className="w-full h-auto rounded-md lg:rounded-xl "
                        />
                       </div>
                    </SwiperSlide>
))}
                </Swiper>
            </div>
        </div>
    );
}