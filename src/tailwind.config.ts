import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './App.tsx',
    './components/**/*.{js,ts,jsx,tsx}',
    './main.tsx'
  ],
  theme: {
    extend: {
      colors: {
        'delice-red': {
          DEFAULT: '#DC2626',
          dark: '#B91C1C',
          light: '#FEE2E2',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'pulse-custom': 'pulse 2s infinite',
      }
    },
  },
  plugins: [],
}

export default config