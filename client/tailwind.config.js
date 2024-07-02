/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DBE2EF",
        secondary: "#F9F7F7",
        ascent: "#112D4E",
        hover: "#3F72AF",
        background1: "#dedede",
        background2: "#e8e9ed",
      },
      backgroundImage: {
        homeback: "url('/homebackground.jpg')",
      },
    },
  },
  plugins: [],
};
