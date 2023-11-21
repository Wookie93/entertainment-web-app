/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bcg-primary': '#FC4747',
        'bcg-dark': '#10141E',
        'bcg-light': '#161D2F',
        'gray-blue': '#5A698F',
        error: '#df2727',
      },
    },
  },
  plugins: [],
};
