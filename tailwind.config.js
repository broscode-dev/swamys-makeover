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
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
