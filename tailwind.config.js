/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        charcoal: '#0e0e0e',
        amber: '#f59e0b',
        orange: '#ea580c',
        gold: '#fbbf24',
        ember: '#ff6b35',
      },
    },
  },
  plugins: [],
}
