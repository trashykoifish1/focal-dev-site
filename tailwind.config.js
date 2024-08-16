/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Roboto Slab", "serif"],
        handwriting: ["Caveat", "cursive"],
      },
      colors: {
        sepia: "#ae696f",
        cream: "#F2E8CF",
      },
      animation: {
        "subtle-sway": "subtle-sway 3s ease-in-out infinite",
      },
      keyframes: {
        "subtle-sway": {
          "0%, 100%": { transform: "translateX(0) scale(1.05) rotate(0deg)" },
          "25%": { transform: "translateX(5px) scale(1.05) rotate(1deg)" },
          "75%": { transform: "translateX(-5px) scale(1.05) rotate(-1deg)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
