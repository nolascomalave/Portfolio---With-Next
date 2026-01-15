/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',           // ← importante: usa class="dark" en <html>
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-inter)', 'system-ui', 'sans-serif'], // puedes usar la misma
      },
      colors: {
        background: {
          light: '#40CF89',
          dark: '#E769F7'
        }
      }
      /* colors: {
        primary: {
          DEFAULT: '#10b981',
          light: '#34d399',
          dark: '#059669',
          neon: '#39ff14',
          'dark-neon-purple': '#9368F9',
          'light-neon-purple': '#E769F7',
        },
        background: {
          light: '#F0F0F2',
          dark: '#1D1C27',
          'dark-neon-purple': '#9368F9',
          'light-neon-purple': '#E769F7',
        },
        text: {
          light: '#1f2937',
          dark: '#e5e7eb',
          'dark-neon-purple': '#9368F9',
          'light-neon-purple': '#E769F7',
        },
        accent: '#8b5cf6',
      }, */
    },
  },
  plugins: [],
}