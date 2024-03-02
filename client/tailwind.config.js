/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        philosopher_regular: ["Philosopher", "sans-serif"],
        abel_regular: ["Abel", "sans-serif"],
      },
      animation: {
        fadeBubble: "fadeBubble 7s infinite",
      },
      keyframes: {
        fadeBubble: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "10%": {
            transform: "translate(10px, 0px) scale(1.1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "45%": {
            transform: "translate(20px, 30px) scale(0.8)",
          },
          "50%": {
            transform: "translate(-10px, 10px) scale(0.9)",
          },
          "75%": {
            transform: "translate(-10px, 10px) scale(0.8)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },

    plugins: [],
  },
};
