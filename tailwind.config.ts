/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',          // ← importante para toggle tema
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        // Puedes personalizar colores aquí después
      },
    },
    plugins: [],
  }