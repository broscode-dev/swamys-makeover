/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ebfeff",
          100: "#cdfaff",
          200: "#a1f2ff",
          300: "#60e7ff",
          400: "#18d2f8",
          500: "#00b4de",
          600: "#008ebb",
          700: "#077297",
          800: "#105d7a",
          900: "#13506c",
          950: "#053147",
        },
        secondary: {
          50: "#fefce8",
          100: "#fff8c2",
          200: "#ffef89",
          300: "#ffde45",
          400: "#fcc80b",
          500: "#ecb106",
          600: "#cc8802",
          700: "#a26006",
          800: "#864b0d",
          900: "#723e11",
          950: "#431f05",
        },
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["DM Serif Display", "serif"],
    },
  },
  plugins: [],
};
