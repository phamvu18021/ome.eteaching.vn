"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAppDispatch } from "@/store/hooks";
import { setUser, User } from "@/store/slices/userSlice";
import { setLoading } from "@/store/slices/userSlice";
import { validateLoginForm } from "@/lib/auth/validation";
import AuthFormField from "@/components/auth/AuthFormField";
import AuthPasswordField from "@/components/auth/AuthPasswordField";
import AuthMessage from "@/components/auth/AuthMessage";
import {
  LoginFormData,
  FormErrors,
  AuthMessage as AuthMessageType,
} from "@/types/auth";
import { handleLogin } from "@/utils/fetch-auth-odoo";
import { toast } from "react-toastify";
import { setCookie } from "nookies";

interface LoginFormProps {
  submitButtonText?: string;
  submittingButtonText?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({
  submitButtonText = "Log in",
  submittingButtonText = "Logging in...",
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState<AuthMessageType | null>(null);

  const resetFormFields = () => {
    setFormData({ email: "", password: "" });
    setErrors({});
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (message) setMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateLoginForm(formData.email, formData.password);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    dispatch(setLoading(true));

    const dataLogin = await handleLogin({
      email: formData.email,
      password: formData.password,
    });
    console.log(dataLogin);
    if (dataLogin.error) {
      console.log(dataLogin.error);
      toast.error(`Đăng nhập thất bại!
          ${dataLogin.error}`);
      setIsSubmitting(false);
    } else {
      setCookie(null, "session_log_id", dataLogin.token, {
        maxAge: 7 * 24 * 60 * 60, // 30 ngày
        path: "/",
      });

      toast.success("Đăng nhập thành công!");

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      dispatch(
        setUser({
          name: dataLogin.user.name,
          email: dataLogin.user.email,
          image: "",
          career: dataLogin.user.career,
          age: dataLogin.user.age,
          phone: dataLogin.user.phone,
          gender: dataLogin.user.gender,
        } as User)
      );
      resetFormFields();
      setIsSubmitting(false);
      router.push("/");
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
          placeholder="Nhập Email của bạn"
          required
          autoComplete="email"
          onChange={handleInputChange}
        />

        <AuthPasswordField
          id="password"
          name="password"
          label="Mật khẩu"
          value={formData.password}
          error={errors.password}
          placeholder="Nhập mật khẩu"
          required
          autoComplete="current-password"
          onChange={handleInputChange}
        />

        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 text-green-600 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-700">Remember me</span>
          </label>
          <Link
            href="/lay-lai-mat-khau"
            className="text-sm font-medium text-gray-700 hover:text-green-600"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 text-sm rounded-lg font-semibold text-white bg-nest-dark hover:bg-nest-primary focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 transition-colors"
        >
          {isSubmitting ? submittingButtonText : submitButtonText}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
