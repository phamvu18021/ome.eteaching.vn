/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getData } from "@/lib/getData";
import { GET_SEARCH } from "@/app/api/graphQL/getSearch";

const SpecialOffers = () => {
  const [data, setData] = useState<any>({});
  const offers = data?.list
    ? data?.list
    : [
        {
          left: "iPhone 17 và iPhone Air",
          right: "Mua ngay",
          link: "/san-pham",
        },
        {
          left: "Laptop nhập học",
          right: "Đổi điểm giảm đến 3 triệu",
          link: "/san-pham",
        },
        {
          left: "SamsungShow",
          right: "Ưu đãi đến 11 triệu",
          link: "/san-pham",
        },
      ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(GET_SEARCH);

        setData(data?.allSearchModal?.nodes[0]?.search || {});
      } catch (error) {
        console.error("Error fetching event data:", error);
      } finally {
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative mt-[15px]">
      <div className="absolute -top-[7px] left-8 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-nest-primary"></div>
      <div className="inline-block w-full bg-white rounded-lg shadow-md overflow-hidden border border-nest-primary">
        <div className="px-4 py-2 bg-nest-primary font-semibold text-white text-sm rounded-t-lg">
          Ưu đãi đặc biệt
        </div>
        <div className="p-2">
          <a
            href={data?.banner?.link || "#"}
            className="hover:cursor-pointer h-fit "
          >
            <Image
              src={data?.banner?.img1?.node?.mediaItemUrl || "/images/bs-2.png"}
              alt="offer"
              width={500}
              height={500}
              className="w-full h-auto object-contain border-nest-primary rounded-lg border"
            />
          </a>
        </div>

        <ul className="divide-y divide-nest-primary/50">
          {offers?.map((item: any, idx: number) => (
            <li
              key={idx}
              className="flex justify-between items-center px-4 py-2 hover:cursor-pointer hover:bg-nest-primary/20 transition"
            >
              <a
                className="flex w-full justify-between items-center  transition"
                href={item?.link || "/"}
              >
                <span className="bg-nest-primary/70 rounded-md px-2 py-0.5 text-white font-medium text-sm">
                  {item?.left}
                </span>
                <span className="bg-nest-primary/70 rounded-md px-2 py-0.5 text-white font-medium text-sm">
                  {item?.right}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpecialOffers;
