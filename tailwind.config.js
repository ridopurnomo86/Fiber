/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.{html,js}"],
  theme: {
    screens: {
      'xs': {'min': '320px', 'max': '640px'},
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}

