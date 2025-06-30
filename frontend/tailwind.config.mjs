/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/html/*.html',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
