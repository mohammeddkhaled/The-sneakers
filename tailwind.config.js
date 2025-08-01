const { plugin } = require('postcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'media440': '440px',
        'media560': '560px',
        'media1200': '1200px'
      },
      backgroundImage: {
        'testimonial-section': "url('/images/testimonial-section-background.png')",
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],

  //dynamic styling  
  // plugins:[
  //   plugin(function({addVariant}){
  //     addVariant("open-menu", ".open-menu &");
  //   }),
  // ]
}