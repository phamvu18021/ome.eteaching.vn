/* eslint-disable @typescript-eslint/no-unused-vars */
import { Check } from "lucide-react"; // Import icon check
import Image from "next/image";

interface PaymentMethodCardProps {
  value: string;
  label: string;
  image: string;
  isSelected: boolean;
  onClick: () => void;
}

export const PaymentMethodCard = ({
  value,
  label,
  image,
  isSelected,
  onClick,
  disabled,
}: PaymentMethodCardProps & { disabled: boolean }) => {
  return (
    <div
      onClick={!disabled ? onClick : undefined} // Chặn click nếu bị vô hiệu hóa
      className={`relative flex flex-col gap-2 rounded-lg border p-4 transition-all
        ${
          disabled
            ? "cursor-not-allowed opacity-50 border-gray-300"
            : "cursor-pointer hover:border-gray-300"
        }
        ${
          isSelected
            ? "border-nest-primary ring-1 ring-nest-primary "
            : "border-gray-200"
        }`}
    >
      {/* Góc trên bên phải */}
      <div
        className={`absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full border 
          ${
            isSelected
              ? "border-nest-primary bg-nest-primary text-white"
              : "border-gray-300 bg-white"
          }`}
      >
        {isSelected ? <Check size={14} /> : null}
      </div>

      {/* Nội dung thẻ */}
      <div className="flex flex-col items-start gap-2">
        <div className="h-[40px] w-auto relative">
          <Image
            src={image}
            alt="Ảnh phương thức thanh toán"
            height={40}
            width={100}
            style={{ height: 40, width: "auto" }}
          />
        </div>
        <span className="text-sm text-gray-600">{label}</span>
      </div>
    </div>
  );
};
