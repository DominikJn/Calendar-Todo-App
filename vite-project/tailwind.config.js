/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-blue': 'var(--main-blue)',
        'main-blue-active': 'var(--main-blue-active)',
        'bg-color': 'var(--background-color)',
        'main-color': 'var(--color)',
        'adjust-border-y': 'var(--adjust-border-y)',
        'adjust-border-x': 'var(--adjust-border-x)',
      }
    },
  },
  plugins: [],
}

