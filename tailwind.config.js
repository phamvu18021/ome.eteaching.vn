/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Exact colors from Nest website
        "nest-primary": "#3BB77E", // Main green
        "nest-secondary": "#FDC040", // Yellow accent
        "nest-dark": "#253D4E", // Dark text
        "nest-gray": "#7E7E7E", // Gray text
        "nest-light-gray": "#F4F6FA", // Light background
        "nest-orange": "#FF7A00", // Orange for deals
        "nest-red": "#FB4E4E", // Red for sale
        "nest-blue": "#2F80ED", // Blue accent
        "nest-purple": "#9757D7", // Purple
        "nest-pink": "#FF69B4", // Pink
        // Override default colors
        background: "#ffffff",
        foreground: "#253D4E",
        "background-hover": "#29A56C",
      },
      fontFamily: {
        quicksand: ["var(--font-quicksand)", "Quicksand", "sans-serif"],
        sans: ["var(--font-quicksand)", "Quicksand", "Arial", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("submenu-group-hover", "&:hover > .submenu-group &");
    },
    require("@tailwindcss/typography"),
  ],
};
