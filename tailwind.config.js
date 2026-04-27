/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'allboys-blue': '#2E2DA8',
        'allboys-blue-dark': '#1E1C7A',
        'allboys-blue-light': '#3D3CC4',
        'allboys-yellow': '#F9EA1B',
        'allboys-yellow-dark': '#DFD018',
        'allboys-gray': '#F3F4F6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
