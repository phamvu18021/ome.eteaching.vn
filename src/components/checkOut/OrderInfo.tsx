/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader } from "@/components/ComponentsUI";
export const OrderInfo = () => {
  const orderDetails = {
    items: [
      { is_reward_line: true, name: "Hoa quyet", price_unit: 100000 },
      { is_reward_line: false, name: "Hoa quyet", price_unit: 100000 },
    ],
  };
  return (
    <div>
      <Card>
        <CardHeader>
          <h2 className="text-lg font-medium">Thông tin đơn hàng</h2>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="space-y-4">
              {orderDetails?.items.map((product: any, index: number) => (
                <div
                  key={index}
                  className={`${
                    product.is_reward_line ? "text-Blush-Pink" : "text-black"
                  } flex items-start space-x-4 p-4 border rounded-lg shadow-sm`}
                >
                  <div className="flex-1">
                    <p className="font-medium">{product.name}</p>
                    <p className="mt-1 text-right text-lg font-semibold">
                      {product.price_unit.toLocaleString("vi-VN")}
                      {" đ"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2 border-t pt-4 text-[16px]">
              <div className="flex justify-between">
                <span className="text-gray-600">Tạm tính</span>
                <span>
                  2.000
                  {" đ"}
                </span>
              </div>
              <div className="text-Blush-Pink text-[16px] flex justify-between">
                <span>Giảm </span>
                {"  2.000 đ"}
              </div>
              <div className="flex justify-between text-[18px] border-t pt-2  font-medium">
                <span>Tổng</span>
                <span>
                  2.00
                  {" đ"}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
