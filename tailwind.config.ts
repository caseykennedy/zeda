/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        background: '#F2F1F3',
        purple: {
          400: 'hsla(252, 100%, 77%, 1)',
          500: 'hsla(252, 100%, 72%, 1)',
          600: 'hsla(252, 100%, 67%, 1)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        mono: ['SuisseMono', 'JetBrains Mono', 'monospace'],
        display: ['Urbanist', 'Arial', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
