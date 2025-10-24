import { AuthPageConfig } from "@/types/auth";

export const LOGIN_PAGE_CONFIG: AuthPageConfig = {
  title: "Đăng nhập",
  subtitle: "Welcome to Nest",
  linkText: "Bạn chưa có tài khoản?",
  linkLabel: "Tạo ngay",
  linkHref: "/dang-ky",
  submitButtonText: "Đăng nhập",
  submittingButtonText: "Đang đăng nhập...",
  imageSrc: "/images/login-1.png",
  imageAlt: "Login",
};

export const REGISTER_PAGE_CONFIG: AuthPageConfig = {
  title: "Tạo tài khoản",
  subtitle:
    "Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy",
  linkText: "Bạn đã có tài khoản?",
  linkLabel: "Đăng nhập",
  linkHref: "/dang-nhap",
  submitButtonText: "Đăng ký",
  submittingButtonText: "Đang đăng ký...",
  imageSrc: "/images/login-1.png",
  imageAlt: "Register",
};
export const FORGOT_PAGE_CONFIG: AuthPageConfig = {
  title: "Bạn quên mật khẩu",
  subtitle: "Chúng tôi sẽ giúp bạn lấy lại mật khẩu",
  linkText: "Bạn đã có tài khoản?",
  linkLabel: "Đăng nhập",
  linkHref: "/dang-nhap",
  submitButtonText: "Lấy lại mật khẩu",
  submittingButtonText: "Đang lấy lại mật khẩu...",
  imageSrc: "/images/login-1.png",
  imageAlt: "Register",
};

export const SOCIAL_LOGIN_PROVIDERS = [
  { name: "Google", variant: "google" as const },
  { name: "Facebook", variant: "facebook" as const },
];

export const AUTH_MESSAGES = {
  LOGIN_SUCCESS: "Login successful!",
  LOGIN_ERROR: "Invalid email or password",
  REGISTER_SUCCESS: "Registration successful!",
  REGISTER_ERROR: "Registration failed. Please try again.",
  EMAIL_EXISTS: "Email already exists",
  NETWORK_ERROR: "Network error. Please try again.",
  VALIDATION_ERROR: "Please fix the errors before submitting",
};

export const VALIDATION_MESSAGES = {
  EMAIL_REQUIRED: "Email is required",
  EMAIL_INVALID: "Please enter a valid email address",
  PASSWORD_REQUIRED: "Password is required",
  PASSWORD_MIN_LENGTH: "Password must be at least 6 characters",
  NAME_REQUIRED: "Name is required",
  CONFIRM_PASSWORD_REQUIRED: "Please confirm your password",
  PASSWORDS_NOT_MATCH: "Passwords do not match",
};
