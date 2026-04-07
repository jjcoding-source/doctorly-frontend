/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',     
        accent: '#14b8a6',      
        success: '#22c55e',
        danger: '#ef4444',
      },
    },
  },
  plugins: [],
}