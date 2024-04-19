/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat'],
      },
      colors: {
        bg: 'black',
        primary: '#00CCCC',
        accent1: 'white', //greyish white
        accent2: '#F2F2F2', //greyish white
      },
      backgroundOpacity: {
        '10': '0.1',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(90deg, rgba(0, 204, 204, 0), rgba(0, 204, 204, 0.8), rgba(0, 204, 204))',
        'hero': 'url(/images/hero/hero.webp)'
      }
    }
  },
  plugins: [],
}

