/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

export function hexToRgba(hex: string, opacity: number) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function getRandomPrimaryColor() {
  const colors = [
    // Hồng & Đỏ pastel
    "#FFB6B9", "#FFCCD5", "#FDE2E4", "#FBC4AB", "#FFD6D6", "#FFC1CC",
    // Cam & San hô
    "#FFD5CD", "#FFE5B4", "#FFD8A8", "#FDD7AA", "#FEE3B3",
    // Vàng & Be
    "#FFF5BA", "#FAE3D9", "#FFF3C4", "#FFF8DC", "#F6F7D7",
    // Xanh lá & Mint
    "#D5ECC2", "#C9E4C5", "#B8F2E6", "#D4ECDD", "#E3F2C1", "#D9ED92",
    // Xanh dương & Ngọc
    "#BBDED6", "#B5EAEA", "#C6DEF1", "#AEECEF", "#CAF0F8", "#ADE8F4",
    // Tím & Lavender
    "#E4BAD4", "#E5C1CD", "#D7C0F3", "#D6CDEA", "#F3C4FB", "#E0BBE4",
    // Xanh lam nhạt
    "#A8DADC", "#BEE3DB", "#CDE7BE", "#BDE0FE"
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomIndex];

  // Độ trong suốt nhẹ để làm nền dịu hơn
  return hexToRgba(color, 0.5);
}

export default getRandomPrimaryColor;
