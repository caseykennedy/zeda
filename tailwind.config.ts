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
        background: {
          500: 'hsla(270, 8%, 95%, 1)',
          600: 'hsla(270, 8%, 90%, 1)',
          700: 'hsla(270, 8%, 85%, 1)',
        },
        blue: {
          500: 'hsla(207, 86%, 56%, 1)',
          600: 'hsla(207, 86%, 46%, 1)',
        },
        moss: {
          300: 'hsla(146, 46%, 57%, 1)',
          400: 'hsla(146, 46%, 57%, 1)',
          500: 'hsla(146, 46%, 57%, 1)',
          600: 'hsla(146, 46%, 57%, 1)',
          700: 'hsla(146, 46%, 57%, 1)',
        },
        silver: {
          100: 'hsla(221, 17%, 86%, 1)',
          200: 'hsla(221, 17%, 78%, 1)',
          300: 'hsla(221, 17%, 69%, 1)',
          400: 'hsla(221, 17%, 63%, 1)',
          500: 'hsla(221, 17%, 57%, 1)',
          600: 'hsla(221, 17%, 51%, 1)',
          700: 'hsla(221, 17%, 44%, 1)',
          800: 'hsla(221, 17%, 33%, 1)',
          900: 'hsla(221, 17%, 17%, 1)',
          950: 'hsla(221, 17%, 6%, 1)',
        },
        violet: {
          300: 'hsla(252, 100%, 84%, 1)',
          400: 'hsla(252, 100%, 77%, 1)',
          500: 'hsla(252, 100%, 72%, 1)',
          600: 'hsla(252, 100%, 67%, 1)',
          700: 'hsla(252, 100%, 64%, 1)',
          800: 'hsla(252, 100%, 61%, 1)',
          900: 'hsla(252, 100%, 58%, 1)',
        },
        yellow: {
          500: 'hsla(50, 86%, 56%, 1)',
          600: 'hsla(50, 86%, 45%, 1)',
          700: 'hsla(50, 86%, 37%, 1)',
          800: 'hsla(50, 86%, 28%, 1)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        display: ['Urbanist', 'Arial', 'sans-serif'],
      },
      fontSize: {},
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
      maxWidth: {
        site: '1680px',
        reading: '54ch',
      },
      spacing: {
        header: '90px',
        '18': '74px',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
