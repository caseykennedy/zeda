import { type Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-light': '#F2F1F3',
      },
      spacing: {
        28: '7rem',
      },
      maxWidth: {
        'site': '1680px',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        mono: ['SuisseMono', 'JetBrains Mono', 'monospace'],
        display: ['Urbanist', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
