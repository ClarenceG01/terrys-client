/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bodoni: ["Bodoni Moda", "serif"],
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#EBD96B;",
        secondary: "#35343a",
        accent: "#1E2753",
      },
      boxShadow: {
        icon: "0px 8px 32px 0px rgba(51, 38, 174, 0.08)",
        card: "0px 1px 4px 0px rgba(21, 34, 50, 0.08)",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-10%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        fade: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        bounce: "bounce 2s",
        fade: "fade 2s",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
