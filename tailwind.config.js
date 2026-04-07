/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          500: '#0891b2',
          600: '#0e7490',
          700: '#155e75',
        },
        accent: {
          100: '#d1fae5',
          300: '#6ee7b7',
          500: '#10b981',
          600: '#059669',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          600: '#475569',
          900: '#0f172a',
        },
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 24px 80px -34px rgb(15 23 42 / 0.28)',
        'card': '0 18px 50px -26px rgb(15 23 42 / 0.18)',
        'glow': '0 0 0 1px rgb(255 255 255 / 0.6), 0 24px 60px -28px rgb(8 145 178 / 0.45)',
      }
    },
  },
  plugins: [],
}
