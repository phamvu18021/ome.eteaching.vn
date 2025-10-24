"use client";

import { useState, useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { selectUser } from "@/store/slices/userSlice";
import nookies from "nookies";
import { toast } from "react-toastify";
import { handleUpdateUserInfo, handleUserInfo } from "@/utils/fetch-auth-odoo";
import { useAppDispatch } from "@/store/hooks";
import { setUser, User } from "@/store/slices/userSlice";

export interface UserDetails {
  name: string;
  email: string;
  phone: string;
  career: string;
  age: number;
  gender: string;
}

export default function AccountInfoForm() {
  const user = useAppSelector(selectUser);
  const [formData, setFormData] = useState<UserDetails>({
    name: "",
    email: "",
    phone: "",
    career: "",
    age: 0,
    gender: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useAppDispatch();

  const cookies = nookies.get();
  const sessionLogId = cookies.session_log_id;

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        career: user.career || "",
        age: user.age || 0,
        gender: user.gender || "",
      });
    }
  }, [user]);

  const handleChange = (field: keyof UserDetails, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setIsSubmitting(true);
    const dataupdate = await handleUpdateUserInfo({
      session_log_id: sessionLogId,
      name: formData.name,
      email: formData.email,
      age: formData.age,
      phone: formData.phone,
      gender: formData.gender,
      career: formData.career,
    });
    if (dataupdate?.success) {
      toast.success("Cập nhật thành công");
      const dataUser = await handleUserInfo({
        session_log_id: sessionLogId,
      });
      setIsSubmitting(false);
      dispatch(
        setUser({
          name: dataUser?.user_info?.name,
          email: dataUser?.user_info?.email,
          image: "",
          career: dataUser?.user_info?.career,
          age: dataUser?.user_info?.age,
          phone: dataUser?.user_info?.phone,
          gender: dataUser?.user_info?.gender,
        } as User)
      );
    } else {
      toast.error("Có lỗi xảy ra khi cập nhật");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 p-6 lg:p-8 space-y-6">
      <h3 className="text-2xl font-bold text-nest-dark">Thông tin tài khoản</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-nest-dark mb-2">
            Tên hiển thị <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-nest-primary focus:outline-none"
            placeholder="Nhập tên hiển thị"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-nest-dark mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            readOnly
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-nest-primary focus:outline-none"
            placeholder="Nhập địa chỉ email"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-nest-dark mb-2">
            Số điện thoại
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => {
              // Chỉ cho phép nhập số
              const numericValue = e.target.value.replace(/\D/g, "");
              handleChange("phone", numericValue);
            }}
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={12}
            placeholder="Nhập số điện thoại"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-nest-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-nest-dark mb-2">
            Nghề nghiệp
          </label>
          <input
            type="text"
            value={formData.career}
            onChange={(e) => handleChange("career", e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-nest-primary focus:outline-none"
            placeholder="Nhập nghề nghiệp"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-nest-dark mb-2">
            Tuổi
          </label>
          <input
            type="number"
            value={formData.age}
            onChange={(e) => handleChange("age", e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-nest-primary focus:outline-none"
            placeholder="Nhập số tuổi"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-nest-dark mb-2">
            Giới tính
          </label>
          <select
            value={formData.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-nest-primary focus:outline-none bg-white"
          >
            <option value="">Chọn giới tính</option>
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
            <option value="other">Khác</option>
          </select>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleSave}
          type="submit"
          disabled={isSubmitting}
          className="w-fit flex justify-center items-center space-x-2 py-3 px-8 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-nest-dark hover:bg-nest-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>{"Đang đổi thông tin cá nhân..."}</span>
            </>
          ) : (
            <>
              <span>{"Lưu thông tin cá nhân"}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
