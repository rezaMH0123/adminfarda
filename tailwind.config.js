/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      custom1: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
    },


    extend: {
            fontFamily: {
        ShabnamRegular: ["ShabnamRegular"],
        ShabnamMedium: ["ShabnamMedium"],
        ShabnamBold: ["ShabnamBold"],

      },
      
      colors: {
        PrimaryBlue: {
          100: "#33BDF1",
          200: "#19B6F1",
          300: "#00ABEB",
        },
        PrimaryBlack: {
          100: "#525252",
          200: "#565656",
          300: "#B3B3B3",
        },

  },
  plugins: [],
};
