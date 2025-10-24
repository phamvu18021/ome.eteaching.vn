"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { UserPlus, User, Mail, Lock } from "lucide-react";
import { validateRegisterForm } from "@/lib/auth/validation";
import AuthFormField from "@/components/auth/AuthFormField";
import AuthPasswordField from "@/components/auth/AuthPasswordField";
import AuthMessage from "@/components/auth/AuthMessage";
import {
  RegisterFormData,
  FormErrors,
  AuthMessage as AuthMessageType,
} from "@/types/auth";
import { handleRegister, handleSendEmail } from "@/utils/fetch-auth-odoo";
import { toast } from "react-toastify";
import CryptoJS from "crypto-js";

interface RegisterFormProps {
  submitButtonText?: string;
  submittingButtonText?: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  submitButtonText = "Create account",
  submittingButtonText = "Creating account...",
}) => {
  const router = useRouter();

  const [formData, setFormData] = useState<RegisterFormData>({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<AuthMessageType | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (message) setMessage(null);
  };
  const resetFormFields = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateRegisterForm(
      formData.username,
      formData.email,
      formData.password
    );

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    const data = await handleRegister({
      name: formData.username,
      email: formData.email,
      password: formData.password,
    });
    if (data && data.error) {
      toast.error("Đăng ký thất bại!");
    } else {
      const url = process.env.NEXT_PUBLIC_DOMAIN;
      handleSendEmail({
        email: formData.email,
        text: `Xin chào,  ${
          formData.username
        } ! Đây là email xác nhận tài khoản của bạn.
        Hãy click vào link này để kích hoạt tài khoản của bạn:  ${url}/xac-nhan-tai-khoan?email=${
          formData.email
        }&password=${CryptoJS.SHA256(formData.password).toString()}`,
      });
      toast.success("Đăng ký thành công!");

      resetFormFields();
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
          id="name"
          name="username"
          type="text"
          label="Tên người dùng"
          value={formData.username}
          error={errors.name}
          placeholder="Nhập tên người dùng"
          autoComplete="name"
          icon={<User className="h-5 w-5 text-gray-400" />}
          onChange={handleInputChange}
        />

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

        <AuthPasswordField
          id="password"
          name="password"
          label="Mật khẩu"
          value={formData.password}
          error={errors.password}
          placeholder="Nhập mật khẩu"
          autoComplete="new-password"
          icon={<Lock className="h-5 w-5 text-gray-400" />}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center items-center space-x-2 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-nest-dark hover:bg-nest-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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

export default RegisterForm;
