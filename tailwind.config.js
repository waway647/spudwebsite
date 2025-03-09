/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        circe: ['Circe', 'sans-serif'], // Define Circe as a custom font family
      },
    },
  },
  plugins: [],
}