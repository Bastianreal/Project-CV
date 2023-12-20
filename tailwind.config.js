const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily : {
        poppins : ["'Poppins'", "sans-serif"],
        nunito : [" 'Nunito', sans-serif"]
      },
      animation : {
        geser : 'geser 600ms ease-in-out',
        fadein : 'fadein 500ms ease-in-out'
      },
      keyframes : {
        geser : {
          '0%' : { transform : 'translateY(-3rem)' },
          '100%' : { transform : 'translateX(0)'},
        },
      fadein : {
        '0%'  : {opacity: '.0'},
        '10%' : {opacity: '.1'},
        '20%' : {opacity: '.2'},
        '30%' : {opacity: '.3'},
        '40%' : {opacity: '.4'},
        '50%' : {opacity: '.5'},
        '60%' : {opacity: '.6'},
        '70%' : {opacity: '.7'},
        '80%' : {opacity: '.8'},
        '90%' : {opacity: '.9'},
        '100%': {opacity: '1' },
      }
    },
  },
  plugins: [],
}

}
