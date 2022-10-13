/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      md: ".975rem",
      lg: "1.1rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      transparent: "transparent",

      gray: {
        900: "#121214",
        800: "#202024",
        400: "#7c7c8a",
        200: "#c4c4cc",
        100: "#e1e1e6",
      },

      cyan: {
        500: "#81d8f7",
        300: "#9be1f8",
      },
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
