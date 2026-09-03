/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'damy-primary': '#0D1B2A',
        'damy-secondary': '#1B3A5C',
        'damy-accent': '#4A90E2',
        'damy-light': '#F8F9FA',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
