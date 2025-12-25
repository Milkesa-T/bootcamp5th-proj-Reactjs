/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // THIS IS MANDATORY for your documentElement.classList logic
  theme: {
    extend: {},
  },
  plugins: [],
}
