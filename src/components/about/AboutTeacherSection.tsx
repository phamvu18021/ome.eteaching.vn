/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AboutTeacherSection({ data }: { data: any }) {
  const router = useRouter();
  return (
    <div className="max-w-[1340px] mx-auto">
      <div className="flex flex-col justify-between items-center lg:flex-row gap-8">
        <div className="basis-1/3">
          <p className="text-nest-primary font-bold text-lg">{data?.section5?.title1 || 'Team'}</p>
          <p className="text-nest-dark font-bold text-2xl lg:text-4xl mb-6">
            {data?.section5?.title2 || 'Chúng tôi giá trị cho khách hàng'}
          </p>
          <p className="text-nest-gray text-md mb-6">{data?.section5?.content || 'Chúng tôi giá trị cho khách hàng'}</p>
          <button
            onClick={() => router.push('/giang-vien')}
            className="items-center gap-2 text-white font-bold text-sm bg-nest-primary py-3 px-8 hover:bg-nest-secondary rounded-md"
          >
            View All members
          </button>
        </div>

        <div className="basis-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {data?.section5?.cardTeachers?.map((item: any, index: number) => (
            <div key={index}>
              <Image
                className="h-auto w-full rounded-xl"
                src={item?.img?.node?.mediaItemUrl || '/images/about-8.png'}
                alt="teacher"
                width={1000}
                height={1000}
                style={{ objectFit: 'contain' }}
              />
              <div className="rounded-xl text-center translate-y-[-90px] bg-white p-8 w-[80%] mx-auto">
                <p className="text-nest-dark font-bold text-xl">{item?.name || 'John Doe'}</p>
                <p className="text-nest-gray text-sm mt-2">{item?.major || 'Major'}</p>
                <div className="flex justify-center gap-4 mt-4">
                  {item?.social?.map((_: any, i: number) => (
                    <Link href={_?.link} key={i}>
                      <i className={`${_?.icon || 'fa-brands fa-facebook'} text-nest-primary text-lg`} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
