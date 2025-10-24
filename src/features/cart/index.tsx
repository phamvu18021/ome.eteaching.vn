"use client";
import { useState } from "react";
import CartTable from "@/components/checkOut/CartTable";
import { PromotionModal } from "@/components/checkOut/PromotionModal";
import Breadcrumb from "@/components/product/Breadcrumb";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <div>
      <Breadcrumb
        items={[{ label: "Trang chủ", href: "/" }, { label: "Gio hang" }]}
      />
      <div className="max-w-[1540px] mx-auto px-4 py-12">
        <div className=" flex flex-col lg:flex-row">
          <div className="basis-2/3">
            <div className="flex justify-between items-end mb-8">
              <div>
                <p className="text-3xl lg:text-5xl font-bold text-nest-dark ">
                  Giỏ hàng
                </p>
                <p className="text-md font-semibold text-nest-gray ">
                  Có <strong className="text-nest-primary">3</strong> sản phẩm
                  trong giỏ hàng
                </p>
              </div>
              <div className="text-nest-gray text-md mt-8 font-semibold content-center items-center flex hover:cursor-pointer">
                <p>Xóa tất cả</p>
                <Trash2 className="ml-2" size={16} />
              </div>
            </div>
          </div>
          <div className="basis1/3"></div>
        </div>
        <div className="gap-4  flex flex-col lg:flex-row">
          <div className="basis-2/3">
            <CartTable type="cart" />
            <div className="flex gap-12 justify-between mt-8">
              <form className="flex flex-1 bg-white rounded-lg border border-nest-primary overflow-hidden shadow max-w-lg">
                <input
                  type="promotion_code"
                  placeholder="Nhập mã khuyến mãi"
                  className=" p-0 md:px-4 md:py-2 flex-1 focus:outline-none text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-nest-primary  hover:bg-green-700 text-white px-8 py-3 font-semibold"
                >
                  Áp dụng
                </button>
              </form>
              <button
                onClick={() => setIsOpen(true)}
                className="bg-white border flex-1 border-nest-primary rounded-lg  hover:bg-nest-primary text-nest-primary hover:text-white px-8 py-3 font-semibold"
              >
                Chương trình khuyến mãi
              </button>
            </div>
          </div>
          <div className="basis-1/3 border rounded-lg h-fit">
            <div className="bg-gray-100 p-4 border-b ">
              <p className="text-2xl text-center font-bold text-nest-dark ">
                Thông tin đơn hàng
              </p>
            </div>
            <div className="px-8 py-4">
              <div className="flex justify-between items-center mt-4">
                <p className="text-nest-gray font-semibold text-lg">
                  Tạm tính:
                </p>
                <p className="text-nest-gray font-semibold text-lg">
                  2.100.000đ
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-nest-dark font-semibold text-lg">Tổng:</p>
                <p className="text-nest-dark font-semibold text-lg">
                  2.100.000đ
                </p>
              </div>
              <button
                onClick={() => router.push("/xac-nhan-thong-tin")}
                className="bg-nest-primary rounded-lg hover:bg-green-700 text-white px-8 py-2 w-full text-center mt-4 font-semibold"
              >
                Tiến hành thanh toán
              </button>
            </div>
          </div>
        </div>

        <PromotionModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          promotions={[]}
          handleConfirm={() => {}}
        />
      </div>
    </div>
  );
};
