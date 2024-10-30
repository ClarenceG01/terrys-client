/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bodoni: ["Bodoni Moda", "serif"],
      },
      colors: {
        primary: "#EBD96B;",
      },
    },
  },
  plugins: [],
};
