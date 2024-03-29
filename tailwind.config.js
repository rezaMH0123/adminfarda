/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      custom1: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
    },

    extend: {
      animation: {
        enter: "enter .8s ease-out",
        leave: "leave .45s ease-in forwards",
      },
      keyframes: {
        enter: {
          "0%": {
            opacity: "0",
            transform: "scale(.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        leave: {
          "0%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "100%": {
            opacity: "0",
            transform: "scale(.9)",
          },
        },
      },
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
          400: "#616161",
        },
      },
    },
  },
  plugins: [],
};
