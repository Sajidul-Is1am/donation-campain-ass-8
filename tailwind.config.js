/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'topBanner': "url('./src/assets/banner/headerBanner.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}

