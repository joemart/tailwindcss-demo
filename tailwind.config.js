/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      //background
      backgroundImage: {
        'gradient-radial': 'radial-gradient(50.00% 50% at 50.00% 50.00%, #153654 0%, rgba(21, 54, 84, 0.50) 0.01%, #153654 79.73%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'my-image' : "url( 'https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg')"
      },
      backgroundColor:{
        'lines': '#D9D9D9'
      },
      
      width:{
        120:"120px",
        50: "50px"
      },
      
      //text
      colors: {
        'navbar-color' : '#89C0F2'
      },
      height: {
        64: "64px",
        830: "830px",
        50:"50px"
      },
      
      //border
      borderColor: {
        "navbar": "rgb(46, 113, 174)"
      },
      borderWidth: {
        "navbar" : "1px"
      },
      
      screens:{

        'md' : '641px',
        'lg' : '1008px'
      },
      transitionProperty: {
        "top":"top",
        'left': 'left',
        
      },
      
     
    },
  },
  plugins: [
    plugin(function({addUtilities}){
      addUtilities ({
        '.animate-forwards' : {
          'animation-fill-mode' : 'forwards'
        }
      })
    })
  ],
}
