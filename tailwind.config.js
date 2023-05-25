/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      signupBlue: "#017ACC",
      yellow: colors.yellow,
      gray: colors.gray,
      white: colors.white,
    },
    extend: {},
  },
  plugins: [],
};
