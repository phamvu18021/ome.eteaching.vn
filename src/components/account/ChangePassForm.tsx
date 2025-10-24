"use client";

import { useState } from "react";
import nookies from "nookies";
import { toast } from "react-toastify";
import { handleChangePassword } from "@/utils/fetch-auth-odoo";
import { clearUser } from "@/store/slices/userSlice";
import { useAppDispatch } from "@/store/hooks";
import { destroyCookie } from "nookies";
import { useRouter } from "next/navigation";

export interface PasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export default function ChangePasswordForm() {
  const [formData, setFormData] = useState<PasswordData>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const dispatch = useAppDispatch();
  const router = useRouter();
  const cookies = nookies.get();
  const sessionLogId = cookies.session_log_id;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof PasswordData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Mật khẩu xác nhận không khớp!");
      return;
    }

    try {
      setIsSubmitting(true);
      const result = await handleChangePassword({
        session_log_id: sessionLogId,
        old_password: formData.currentPassword,
        new_password: formData.newPassword,
      });

      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success("Đổi mật khẩu thành công!");
        setFormData({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
        dispatch(clearUser());
        destroyCookie(null, "session_log_id", { path: "/" });
        router.push("/");
      }
    } catch (err) {
      toast.error("Có lỗi xảy ra khi đổi mật khẩu!");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 p-6 lg:p-8 space-y-6">
      <h3 className="text-2xl font-bold text-nest-dark">Đổi mật khẩu</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-2">
          <label className="block text-sm font-semibold text-nest-dark mb-2">
            Mật khẩu hiện tại
          </label>
          <input
            type="password"
            value={formData.currentPassword}
            onChange={(e) => handleChange("currentPassword", e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-nest-primary focus:outline-none"
            placeholder="Nhập mật khẩu hiện tại"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-nest-dark mb-2">
            Mật khẩu mới
          </label>
          <input
            type="password"
            value={formData.newPassword}
            onChange={(e) => handleChange("newPassword", e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-nest-primary focus:outline-none"
            placeholder="Nhập mật khẩu mới"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-nest-dark mb-2">
            Xác nhận mật khẩu mới
          </label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-nest-primary focus:outline-none"
            placeholder="Nhập lại mật khẩu mới"
          />
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
              <span>{"Đang đổi mật khẩu..."}</span>
            </>
          ) : (
            <>
              <span>{"Đổi mật khẩu"}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
