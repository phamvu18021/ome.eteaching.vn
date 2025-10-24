import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ComponentsUI";
import { CountdownTimer } from "../ui/CountDownTime";
import { useState } from "react";
import { Copy, Check, CheckCircle } from "lucide-react";

import Link from "next/link";

interface BankTransferDetailsProps {
  bankInfo: {
    bankName: string;
    accountNumber: string;
    accountHolder: string;
    amount: string;
    branch: string;
  };
  handleConfirmTransaction: () => void;
}

export function BankTransferDetails({
  bankInfo,
  handleConfirmTransaction,
}: BankTransferDetailsProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const handleCopy = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 10000);
    } catch (error) {
      console.error("Lỗi sao chép:", error);
      alert(
        "Trình duyệt không hỗ trợ sao chép tự động. Vui lòng sao chép thủ công."
      );
    }
  };
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <h2 className="text-lg font-medium">
            Thanh toán chuyển khoản ngân hàng
          </h2>
          <div className="text-neutral-600 text-[14px] flex items-center gap-2 my-2">
            <p>Giao dịch hết hạn sau : </p>{" "}
            <CountdownTimer initialMinutes={15} />
          </div>
          <div className="rounded-lg bg-yellow-50 p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 text-yellow-600" />
              <div className="text-sm text-yellow-800">
                <p>
                  Quý khách vui lòng không tắt trình duyệt cho đến khi nhận được
                  kết quả giao dịch
                </p>
                <p>
                  trên website. Trường hợp đã thanh toán nhưng chưa nhận kết quả
                  của thanh công vui
                </p>
                <p>
                  lòng gọi hotline{" "}
                  <Link href={`tel:0852248855`}>
                    <span className="font-bold">085.224.8855</span>
                  </Link>{" "}
                  (8:00 - 17:00) để được hỗ trợ
                </p>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Image
                src="/bank.png"
                alt="Techcombank"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>

            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-[140px_1fr] items-center gap-2">
                <span className="text-gray-500">Ngân hàng:</span>
                <span>{bankInfo.bankName}</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] items-center gap-2">
                <span className="text-gray-500">Số tài khoản:</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{bankInfo.accountNumber}</span>
                  <button
                    onClick={() =>
                      handleCopy(
                        `${bankInfo?.accountNumber || "test"}`,
                        "account"
                      )
                    }
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    Sao chép
                  </button>
                  {copiedField === "account" ? (
                    <Check className="text-blue-600 hover:text-blue-700 h-4 w-4" />
                  ) : (
                    <>
                      <Copy className="text-blue-600 hover:text-blue-700 ml-1 inline h-4 w-4" />
                    </>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-[140px_1fr] items-center gap-2">
                <span className="text-gray-500">Người thụ hưởng:</span>
                <span>{bankInfo.branch}</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] items-center gap-2">
                <span className="text-gray-500">Nội dung CK:</span>
                <div className="flex items-center gap-2">
                  <span>{bankInfo.accountHolder}</span>
                </div>
              </div>
              <div className="grid grid-cols-[140px_1fr] items-center gap-1">
                <span className="text-gray-500">Ví dụ:</span>
                <div className="flex items-center gap-2">
                  <span>Nguyen Van A 09123456789 01011997</span>
                </div>
              </div>
              <div className="grid grid-cols-[140px_1fr] items-center gap-2">
                <span className="text-gray-500">Số tiền:</span>
                <span className="font-medium">
                  {Number(bankInfo.amount).toLocaleString("vi-VN")} {" đ"}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="relative h-48 w-48">
                <Image
                  src="/images/qr.png"
                  alt="QR Code"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-sm text-gray-500">
                Dùng ứng dụng ngân hàng quét QR để chuyển khoản
              </p>
              <button
                onClick={handleConfirmTransaction}
                className="w-full xl:w-[280px] rounded-lg bg-nest-primary hover:bg-green-600 px-4 py-3 text-white"
              >
                Xác nhận thanh toán
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
