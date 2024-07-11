/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': 'rgb(94, 145, 240)',
        'blue-active': 'rgb(60, 108, 196)',
      }
    },
  },
  plugins: [],
}


