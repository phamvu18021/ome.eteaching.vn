/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import AnimationCount from '@/components/ui/AnimationCount';

export default function AboutCountSection({ data }: { data: any }) {
  return (
    <div className="mb-18 hidden lg:block max-w-[1540px] mx-auto">
      <div
        style={{
          backgroundImage: "url('/images/about-9.png')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className="text-center relative rounded-2xl overflow-hidden p-16"
      >
        <div className="absolute inset-0 bg-[#4B675A] opacity-80 z-0" />

        <div className="relative z-10 flex flex-wrap">
          {data?.section4?.map((item: any, index: number) => (
            <div key={index} className={`${index === 4 ? 'w-full' : 'w-1/2'} xl:w-1/5 px-4`}>
              <AnimationCount number={item?.number} time={2000} text={item?.text || ''} />
              <p className="text-white text-lg font-bold">{item?.content || 'Tại sao chọn chúng tôi'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
