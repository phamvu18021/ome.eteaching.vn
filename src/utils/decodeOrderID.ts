import CryptoJS from "crypto-js";

const SECRET_KEY = "VSTEP"; // Lưu khóa bí mật vào biến môi trường

// Mã hóa order_id
export const encryptOrderId = (order_id: string) => {
  const ciphertext = CryptoJS.AES.encrypt(order_id, SECRET_KEY).toString();
  return encodeURIComponent(ciphertext); // Mã hóa URL để tránh lỗi khi truyền
};

// Giải mã order_id

export const decryptOrderId = (encrypted_order_id: string): string => {
  try {
    if (!encrypted_order_id) return "";

    const decoded = decodeURIComponent(encrypted_order_id);

    const decrypted = CryptoJS.AES.decrypt(decoded, SECRET_KEY);
    const plainText = decrypted.toString(CryptoJS.enc.Utf8);

    // Trường hợp decrypted trả về "" do sai key hoặc sai data
    if (!plainText) throw new Error("Invalid decryption");

    return plainText;
  } catch (error) {
    console.error("decryptOrderId failed:", error);
    return "";
  }
};
