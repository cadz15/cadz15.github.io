/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-purple-light": "#D9D9D9",
      },
      boxShadow: {
        brutalism: "2px 2px rgba(0, 0, 0, 1)",
        "brutalism-alt": "4px 4px rgba(0, 0, 0, 1)",
      },
    },
    fontFamily: {
      Syne: ["Syne", "sans-serif"],
    },
    container: {
      center: true,
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [require("tailwindcss-bg-patterns")],
};
