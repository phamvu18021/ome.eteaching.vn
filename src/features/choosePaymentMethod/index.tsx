/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
} from "@/components/ComponentsUI";
import { PaymentMethodCard } from "@/components/PaymentMethodCard";
import { paymentMethods } from "@/constants/paymentMethod";
import { ProgressSteps } from "@/components/checkOut/ProgressSteps";
import { OrderInfo } from "@/components/checkOut/OrderInfo";
import { CustomerInfo } from "@/components/checkOut/CustomerInfo";

export const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("bank");
  const [orderDetails, setOrderDetails] = useState<any>(null);

  const promotion = orderDetails?.reward;
  const rewardItems = orderDetails?.items?.filter(
    (item: any) => item.is_reward_line
  );
  const total_amount = orderDetails?.items
    ?.filter((product: any) => !product.is_reward_line)
    .reduce(
      (total: number, product: any) =>
        total + product.price_unit * product.quantity,
      0
    );
  return (
    <div className="min-h-screen bg-white ">
      <div className="h-[50px] xl:h-[66px] bg-transparent mt-2 md:mt-[2px]"></div>
      <ProgressSteps step={1} />
      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid md:grid-cols-[3fr_2fr] gap-8">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <h2 className="text-lg font-medium">
                  Chọn phương thức thanh toán
                </h2>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4">
                  {paymentMethods.map((method) => (
                    <PaymentMethodCard
                      key={method.value}
                      {...method}
                      isSelected={selectedMethod === method.value}
                      onClick={() =>
                        !method.disabled && setSelectedMethod(method.value)
                      }
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Button className="w-full xl:w-[350px] py-3 text-base bg-nest-primary hover:bg-green-600">
              Tiến hành thanh toán
            </Button>
          </div>
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
