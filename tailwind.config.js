/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'body' : '#F5f5f5'
    },
    boxShadow: {
      'custom': '0 4px 8px rgba(0, 0, 0, 0.1)',
      'hover': ' 0 8px 16px rgba(0, 0, 0, 0.2);'
    },
    transitionProperty: {
        'transform-shadow': 'transform, box-shadow',
      },
      transitionTimingFunction: {
        'ease-default': 'ease',
      },
    
  },
  plugins: [],
}

