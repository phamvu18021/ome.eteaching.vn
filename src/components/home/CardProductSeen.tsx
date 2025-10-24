/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { X } from "lucide-react";

export const CardProductSeen = ({item}: {item: any}) => {
  return (
    <div className="relative flex items-center gap-3 bg-white shadow-sm border rounded-xl p-3 w-full hover:shadow-md transition">
      {/* Nút đóng */}
      <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
        <X size={16} />
      </button>

      {/* Ảnh sản phẩm */}
      <div className="flex-shrink-0">
        <Image
          src="/images/product-9-1.jpg" // thay bằng ảnh thật
          alt="Dell Inspiron 15 3520"
          width={70}
          height={70}
          className="object-contain rounded-md"
        />
      </div>

      {/* Thông tin sản phẩm */}
      <div className="flex flex-col justify-between text-sm">
        <p className="font-medium text-gray-800 leading-tight line-clamp-2">
          Dell Inspiron 15 3520 i7 1255U (N3520-...)
        </p>
        <span className="font-semibold text-red-600 mt-1">
          18.990.000đ
        </span>
      </div>
    </div>
  );
};
