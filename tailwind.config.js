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
        bg2: '#32527B', //blue
        accent1: 'white',
        accent2: '#F2F2F2', //greyish white
      }
    }
  },
  plugins: [],
}

