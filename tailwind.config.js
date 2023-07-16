/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        other: { min: '340px', max: '1200px' },
      },
      colors: {
        darkbg: '#1e293b',
        blue: {
          850: '#1e40af',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
