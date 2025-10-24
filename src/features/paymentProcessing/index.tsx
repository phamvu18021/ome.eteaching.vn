/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { BankTransferDetails } from "@/components/checkOut/BankTransferDetails";
import { useState } from "react";
import { ProgressSteps } from "@/components/checkOut/ProgressSteps";
import { OrderInfo } from "@/components/checkOut/OrderInfo";
import { CustomerInfo } from "@/components/checkOut/CustomerInfo";
import { useRouter } from "next/navigation";

export const PaymentProcessingPage = () => {
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const router = useRouter();

  const bankInfo = {
    bankName: "Ngân hàng Thương Mại Cổ Phần Quân Đội (MB)",
    accountNumber: "3121238888",
    accountHolder: "Họ tên, SĐT, ngày sinh",
    amount: orderDetails?.total_price || 0,
    branch: "Công ty Cổ phần tư vấn dịch vụ Đào tạo AUM Việt Nam",
  };
  return (
    <div className="min-h-screen bg-white">
      <div className="h-[50px] xl:h-[66px] bg-transparent mt-2 md:mt-[2px]"></div>

      <ProgressSteps step={2} />

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-8 md:grid-cols-[3fr_2fr]">
          {/* Bank Transfer Details */}
          <BankTransferDetails
            bankInfo={bankInfo}
            handleConfirmTransaction={() =>
              router.push("/thanh-toan-thanh-cong")
            }
          />

          {/* Customer & Order Info */}
          <div className="space-y-8">
            <CustomerInfo />

            <OrderInfo />
          </div>
        </div>
      </div>
    </div>
  );
};
