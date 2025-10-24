export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  username: string;
  email: string;
  password: string;
}

export interface AuthMessage {
  type: 'success' | 'error' | 'info';
  text: string;
}

export interface FormErrors {
  [key: string]: string;
}

export interface AuthPageConfig {
  title: string;
  subtitle: string;
  linkText: string;
  linkLabel: string;
  linkHref: string;
  submitButtonText: string;
  submittingButtonText: string;
  imageSrc: string;
  imageAlt: string;
}