const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        green: '#1EB589',
        red: '#DC414C',
      },
      socials: {
        facebook: '#178FF5',
        twitter: '#1DA1F2',
        'instagram-start': '#DF4896',
        'instagram-end': '#FDC366',
        youtube: '#C4032B',
      },
      light: {
        toggle: '#AEB3CB',
        'blue-pale': '#F7F9FF',
        'blue-grayish-dark': '#63687D',
        'blue-grayish-light': '#F1F3FA',
        'blue-dark': '#1D1F29',
      },
      dark: {
        'toggle-start': '#40DB82',
        'toggle-end': '#388FE7',
        'blue-dark': '#20222F',
        'blue-darkest': '#1D1F29',
        'blue-desaturated': '#8C98C6',
        'blue-desaturated-dark': '#252B42',
      },
      white: '#FFF',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        widest: '.4em',
      },
      fontSize: {
        large: ['3.5rem', 1],
      },
      borderRadius: {
        card: '.3125rem',
      },
      gridTemplateColumns: {
        cards: 'repeat(auto-fill, minmax(16rem, 1fr))',
      },
    },
  },
}
