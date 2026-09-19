/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Manrope Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        paper: 'rgb(var(--paper) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        brand: {
          50: '#eefaf7',
          100: '#d2f1ea',
          500: '#14907f',
          600: '#0f766e',
          700: '#0d5f59',
        },
        marigold: { 100: '#fbeecb', 500: '#e0a100', 600: '#b98100' },
        danger: { 100: '#fde6dc', 500: '#d9480f', 600: '#b63a0a' },
      },
      boxShadow: {
        pop: '0 12px 32px -12px rgb(0 0 0 / 0.28)',
      },
    },
  },
  plugins: [],
}
