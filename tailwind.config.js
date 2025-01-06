/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkGray': '#141414',
        'mediumGray': '#666666',
        'lightGray': '#D3D3D3',
        'black': '#041e2e',
        'yellow': '#05F2DB',
        'lightYellow': '#05F2DB',
        'lightBlue': '#B4ECEB',
        'darkBlue': '#1C5B74',
        'midBlue': '#6CA4AC'
      },
    },
  },
  plugins: [],
}

