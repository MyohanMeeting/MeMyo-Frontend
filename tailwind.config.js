/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        memyo: {
          yellow1: '#FFF200',
          yellow2: '#FFE600',
          yellow3: '#FFD900',
          yellow4: '#FFCC00',
          yellow5: '#FFBF00',
          yellow6: '#FFB300',
          yellow7: '#FFA600',
          yellow8: '#FF9900',
          yellow9: '#FF8C00',
          yellow10: '#FF8000',
        },
        signup: {
          signupBlue: '#017ACC',
          yellow: colors.yellow,
          gray: colors.gray,
          white: colors.white,
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
