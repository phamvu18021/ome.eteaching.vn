// Form validation utilities
export interface ValidationResult {
  isValid: boolean;
  errors: { [key: string]: string };
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  // Check minimum length
  if (password.length < 6) return false;

  // Check for Vietnamese characters with diacritics
  const vietnameseDiacriticsRegex =
    /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]/;
  if (vietnameseDiacriticsRegex.test(password)) return false;

  return true;
};

export const validateLoginForm = (
  email: string,
  password: string
): ValidationResult => {
  const errors: { [key: string]: string } = {};

  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!password.trim()) {
    errors.password = "Password is required";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
  } else if (!validatePassword(password)) {
    errors.password =
      "Password cannot contain Vietnamese characters with diacritics";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateRegisterForm = (
  name: string,
  email: string,
  password: string
): ValidationResult => {
  const errors: { [key: string]: string } = {};

  if (!name.trim()) {
    errors.name = "Name is required";
  } else if (name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters long";
  }

  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!password.trim()) {
    errors.password = "Password is required";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
  } else if (!validatePassword(password)) {
    errors.password =
      "Password cannot contain Vietnamese characters with diacritics";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateForgotPassForm = (email: string): ValidationResult => {
  const errors: { [key: string]: string } = {};

  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(email)) {
    errors.email = "Please enter a valid email address";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
