/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        retro: {
          black: '#1a1a1a',
          dark: '#2d2d2d',
          gray: '#4a4a4a',
          cream: '#f5f0e6',
          paper: '#e8e0d0',
          orange: '#e07b39',
          rust: '#c45c26',
          teal: '#2d8a8a',
          green: '#4a7c59',
          brown: '#8b6914',
          red: '#c44536',
          purple: '#6b5b95',
        },
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
