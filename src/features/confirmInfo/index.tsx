/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import CartTable from "@/components/checkOut/CartTable";
import { PromotionModal } from "@/components/checkOut/PromotionModal";
import Breadcrumb from "@/components/product/Breadcrumb";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export const ConfirmInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({ name: "", phone: "", email: "" });
  const [checkEmail, setCheckEmail] = useState<any>(0);
  const router = useRouter();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "fullName") {
      setUsername(value);
      setErrors((prev: any) => ({
        ...prev,
        name: value.trim() !== "" ? "" : "Tên không được để trống",
      }));
    }
    if (name === "phone") {
      setPhone(value);
      const phonePattern = /^(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})$/;
      setErrors((prev: any) => ({
        ...prev,
        phone: phonePattern.test(value) ? "" : "Số điện thoại không hợp lệ",
      }));
    }

    if (name === "email") {
      setEmail(value);

      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      setErrors((prev: any) => ({
        ...prev,
        email: emailPattern.test(value) ? "" : "Email không hợp lệ",
      }));
    }
  };
  const handleCheckEmail = async () => {
    // Sao chép errors hiện tại
    const newErrors = { ...errors };
    let hasError = false;

    // Kiểm tra họ tên
    if (!username.trim()) {
      newErrors.name = "Vui lòng nhập họ và tên.";
      hasError = true;
    }

    // Kiểm tra email
    if (!email.trim()) {
      newErrors.email = "Vui lòng nhập email.";
      hasError = true;
    } else {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
        newErrors.email = "Email không hợp lệ.";
        hasError = true;
      }
    }

    // Kiểm tra số điện thoại
    if (!phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại.";
      hasError = true;
    } else {
      const phonePattern = /^(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})$/;
      if (!phonePattern.test(phone)) {
        newErrors.phone = "Số điện thoại không hợp lệ.";
        hasError = true;
      }
    }

    setErrors(newErrors);

    if (hasError) return;
    router.push("/tien-hanh-thanh-toan");
  };
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Xác nhận thông tin" },
        ]}
      />
      <div className="max-w-[1540px] mx-auto px-4 py-12">
        <div className="gap-4  flex flex-col lg:flex-row">
          <div className="basis-2/3 border rounded-lg p-8">
            <div className="border-b mb-8">
              <p className="text-2xl text-nest-dark font-bold mb-6 text-left ">
                Thông tin đơn hàng
              </p>
            </div>
            <CartTable type="cartInfo" />
            <div className="border-t mt-8">
              <div className="flex justify-between items-center mt-4">
                <p className="text-nest-gray font-semibold text-lg">
                  Tạm tính:
                </p>
                <p className="text-nest-gray font-semibold text-lg">
                  2.100.000đ
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-nest-red font-semibold text-lg">Trừ:</p>
                <p className="text-nest-red font-semibold text-lg">100.000đ</p>
              </div>
              <div className="flex justify-between items-center mt-4 pt-4 border-t">
                <p className="text-nest-dark font-bold text-xl">Tổng cộng:</p>
                <p className="text-nest-dark font-bold text-xl">2.000.000đ</p>
              </div>
            </div>
          </div>
          <div className="basis-1/3 border rounded-lg h-fit">
            <div className="bg-gray-100 p-4 border-b ">
              <p className="text-2xl text-center font-bold text-nest-dark ">
                Xác nhận thông tin
              </p>
            </div>
            <div className="px-8 py-4">
              <div>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block font-medium mb-1 text-gray-700"
                    >
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      required
                      name="fullName"
                      readOnly={checkEmail !== 0}
                      value={username}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5a76]"
                      placeholder="Nhập họ và tên"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-medium mb-1 text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      readOnly={checkEmail !== 0}
                      required
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5a76]"
                      placeholder="Nhập địa chỉ email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-medium mb-1 text-gray-700"
                    >
                      Số điện thoại
                    </label>{" "}
                    <p className="text-black-700 text-[11px] mt-0 italic">
                      *Vui lòng điền đúng số điện thoại để chúng tôi có thể liên
                      hệ với bạn
                    </p>
                    <input
                      type="tel"
                      name="phone"
                      readOnly={checkEmail !== 0}
                      value={phone}
                      required
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5a76]"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-0">{errors.phone}</p>
                  )}
                </div>

                {checkEmail == 0 && (
                  <button
                    onClick={handleCheckEmail}
                    // disabled={!email || !phone || !username || errors.email ? true : false}
                    className="bg-nest-primary rounded-lg hover:bg-green-700 text-white px-8 py-2 w-full text-center mt-4 font-semibold"
                  >
                    Xác nhận thông tin
                  </button>
                )}
              </div>
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
