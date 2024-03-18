/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      custom1: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
    },
    extend: {
      fontFamily: {
        regular: ["Regular"],
        medium: ["Medium"],
        bold: ["Bold"],
      },
    },
  },
  plugins: [],
};
