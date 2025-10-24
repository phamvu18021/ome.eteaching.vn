/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader } from "@/components/ComponentsUI";
export const CustomerInfo = () => {
  const orderDetails = {
    partner_name: "khách hàng",
    partner_email: "example@gmail.com",
    partner_phone: "0987654321",
    order_name: "c682de",
  };
  return (
    <div>
      <Card>
        <CardHeader>
          <h2 className="text-lg font-medium">Thông tin khách hàng</h2>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-4 text-sm">
            <div className="grid grid-cols-[120px_1fr] gap-4">
              <div className="text-gray-600">Họ và tên:</div>
              <div>{orderDetails?.partner_name || "khách hàng"}</div>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-4">
              <div className="text-gray-600">Số điện thoại:</div>
              <div>{orderDetails?.partner_phone || "0987654321"}</div>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-4">
              <div className="text-gray-600">Email:</div>
              <div>{orderDetails?.partner_email || "example@gmail.com"}</div>
            </div>

            <div className="grid grid-cols-[120px_1fr] gap-4">
              <div className="text-gray-600">Mã đơn hàng:</div>
              <div>{orderDetails?.order_name || "order name"}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
