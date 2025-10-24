"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { ProgressSteps } from "@/components/checkOut/ProgressSteps";
import { CheckCircle } from "lucide-react";

export const PaymentSuccessPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <div className="h-[50px] xl:h-[66px] bg-transparent mt-2 md:mt-[2px]"></div>

      <ProgressSteps step={4} />
      {/* Success Message */}
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <div className="my-12 flex justify-center">
          <div className="relative">
            {/* Outermost circle - Larger green circle */}
            <div className="absolute -inset-10 rounded-full bg-green-100"></div>
            {/* Outer circle */}
            <div className="absolute -inset-4 rounded-full bg-green-200"></div>
            {/* Middle circle */}
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
        <h1 className="mb-4 text-2xl font-semibold">Mua hàng thành công</h1>
        <p className="mb-8 text-gray-600">
          Đơn hàng đã được ghi nhận. Chúng tôi sẽ kiểm tra thông tin thanh toán
          và gửi cho bạn tài khoản cùng hướng dẫn truy cập khóa học trong vòng
          24 giờ tới! Nếu bạn có bất kỳ thắc mắc nào, vui lòng liên hệ với chúng
          tôi qua email:{" "}
          <Link className="font-bold" href={"mailto:hotro@evstep.edu.vn"}>
            hotro@evstep.edu.vn
          </Link>{" "}
          hoặc qua hotline :{" "}
          <Link className="font-bold" href={"tel:0852248855"}>
            085.224.8855
          </Link>{" "}
          !
        </p>
        <button
          onClick={() => router.push("/")}
          className="rounded-lg bg-nest-primary px-6 py-3 text-white hover:bg-green-600"
        >
          Về trang chủ
        </button>
      </div>
    </div>
  );
};
