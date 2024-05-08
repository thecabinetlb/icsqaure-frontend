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
        'gradient': 'linear-gradient(90deg, rgba(0, 27, 27), rgba(0, 102, 102))',
        // 'card-gradient': 'linear-gradient(90deg, rgba(0, 117, 117), rgba(0, 204, 204))',
        'hero': 'url(/images/hero/hero.webp)',
        'background_v3': 'url(/images/hero/background_v3.webp)',
        'sky_v3': 'url(/images/hero/sky_v3.webp)',
        'buildings_v3': 'url(/images/hero/buildings_v3.webp)'
      },
      aspectRatio: {
        '1.48/1': '1.48 / 1',
        '1.57/1': '1.57 / 1',
        '2.46/1': '2.46 / 1',
        '1.82/1': '1.82 / 1',
        '0.7/1': '0.7 / 1',
      }
    }
  },
  plugins: [],
}

