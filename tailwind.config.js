/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT( {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
          'primary':['Roboto Slab']
      },
      colors: {
        'primary': '#020520',
        'primary_light': '#7283b5',
        'primary_light2': '#4f64a3',
        'secondary':'#08143b',
        'tertiary': '#5995a4',
        'contrast': '#f4eee0',
        'contrast_light': '#ffffff',//'contrast_light': '#c7f4ff',
        'secondary_light': '#12235a',
        'extra':'#d2af84'
      }
    },
  },
  plugins: [],
});
