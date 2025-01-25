/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#041e2e',
        'cream': '#F1F0E8',
        'darkBlue': '#1C5B74',
        'darkGray': '#141414',
        'lightBlue': '#B4ECEB',
        'lightGray': '#D3D3D3',
        'midBlue': '#6CA4AC',
        'midPurple': '#6e5494',
        'midGray': '#666666'
      },
    },
  },
  plugins: [],
}

