/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-top-bg': '#161439',
        'text-white': '#E6EAEF',
      },
    },
  },
  plugins: [],
}