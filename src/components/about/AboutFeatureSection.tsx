/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Image from 'next/image';

export default function AboutFeatureSection({ data }: { data: any }) {
  return (
    <div className="mb-18 max-w-[1340px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6 lg:mb-8 xl:mb-16">
        <Image
          className="h-auto w-full"
          src={data?.section3?.img?.node?.mediaItemUrl || '/images/about-5.png'}
          alt="feature"
          width={1000}
          height={1000}
          style={{ objectFit: 'contain' }}
        />
        <div className="content-center">
          <div className="mb-2">
            <span className="text-nest-gray font-bold text-xl lg:text-2xl">
              {data?.section3?.title1 || 'Tại sao chọn chúng tôi'}
            </span>
          </div>
          <h2 className="text-2xl lg:text-4xl font-bold text-nest-dark mb-4">
            {data?.section3?.title2 || 'Chúng tôi giá trị cho khách hàng'}
          </h2>

          {data?.section3?.listsub?.map((item: any, index: number) => (
            <p key={index} className="text-nest-gray max-w-3xl mb-4 mx-auto text-md leading-relaxed">
              {item?.sub || 'Chúng tôi giá trị cho khách hàng'}
            </p>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {data?.section3?.listDescription?.map((item: any, index: number) => (
          <div key={index}>
            <p className="text-nest-dark font-bold text-xl lg:text-2xl">{item?.title || 'Tại sao chọn chúng tôi'}</p>
            <p className="text-nest-gray text-md">{item?.content || 'Chúng tôi giá trị cho khách hàng'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
