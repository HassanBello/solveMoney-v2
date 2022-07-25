/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      white: colors.white,
      black: { ...colors.black, 300: "#393939" },
      gray: {
        ...colors.neutral,
        100: "#f8fafc",
        200: "#f1f5f9",
        300: "#cbd5e1",
        400: "#E2E8F0",
        500: "#64748B",
        600: "#94A3B8",
      },
      blue: {
        100: "#5aa5fe",
        200: "#4888d5",
        600: "#26355b",
        700: "#172037",
      },
      green: {
        ...colors.green,
        100: "#10b981",
        200: "#059669",
      },
      red: {
        ...colors.red,
        100: '#FFF1F2',
        200: '#F43F5E'
      }
    },
    fontWeight: {
      100: "100",
      200: "200",
      300: "300",
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
      900: "900",
    },
    extend: {
      backgroundImage: {
        auth: "url('https://res.cloudinary.com/dfqkwnen0/image/upload/v1658750509/unsplash_C5XyLljkMrY_jqae8q.png')",
      },
    },
  },
  plugins: [],
};
