"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import CryptoJS from "crypto-js";
import { Mail, UserPlus } from "lucide-react";

import { validateForgotPassForm } from "@/lib/auth/validation";
import { checkEmailExist, handleSendEmail } from "@/utils/fetch-auth-odoo";
import {
  LoginFormData,
  FormErrors,
  AuthMessage as AuthMessageType,
} from "@/types/auth";
import AuthFormField from "@/components/auth/AuthFormField";
import AuthMessage from "@/components/auth/AuthMessage";
import { generateRandomPassword } from "@/utils/genPass";

interface RegisterFormProps {
  submitButtonText?: string;
  submittingButtonText?: string;
}

const ForgotPassForm: React.FC<RegisterFormProps> = ({
  submitButtonText = "Lấy lại mật khẩu",
  submittingButtonText = "Đang xử lý...",
}) => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<AuthMessageType | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (message) setMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 🔹 Validate email
    const validation = validateForgotPassForm(formData.email);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    try {
      // 🔹 Kiểm tra email tồn tại trên Odoo
      const emailExists = await checkEmailExist(formData.email);
      console.log(emailExists);

      if (!emailExists?.exists) {
        toast.error("Email không tồn tại trong hệ thống!");
        setIsSubmitting(false);
        return;
      }

      // 🔹 Sinh mật khẩu mới + mã hóa
      const password = generateRandomPassword();
      const hashedPassword = CryptoJS.SHA256(password).toString();

      // 🔹 Gửi email
      await handleSendEmail({
        email: formData.email,
        text: `
          Xin chào ${formData.email}!
          Đây là email xác nhận cấp lại mật khẩu của bạn.
          Mật khẩu mới của bạn là: ${password}
          Hãy click vào link sau để kích hoạt tài khoản: 
          ${process.env.NEXT_PUBLIC_DOMAIN}/xac-nhan-lay-lai-mat-khau?em=${formData.email}&mk=${hashedPassword}
            Kích hoạt ngay
          
        `,
      });

      toast.success("Vui lòng kiểm tra email để lấy lại mật khẩu!");
      setIsSubmitting(false);
      setFormData({ email: "", password: "" });
    } catch (error) {
      console.error("Lỗi khi xử lý quên mật khẩu:", error);
      toast.error("Có lỗi xảy ra, vui lòng thử lại!");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {message && (
        <div className="mb-6">
          <AuthMessage type={message.type} text={message.text} />
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <AuthFormField
          id="email"
          name="email"
          type="email"
          label="Email"
          value={formData.email}
          error={errors.email}
          placeholder="Nhập email của bạn"
          autoComplete="email"
          icon={<Mail className="h-5 w-5 text-gray-400" />}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center items-center gap-2 py-3 px-4 rounded-lg font-semibold text-white bg-nest-dark hover:bg-nest-primary disabled:opacity-50 transition-colors"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>{submittingButtonText}</span>
            </>
          ) : (
            <>
              <UserPlus className="h-4 w-4" />
              <span>{submitButtonText}</span>
            </>
          )}
        </button>
      </form>
    </>
  );
};

export default ForgotPassForm;
