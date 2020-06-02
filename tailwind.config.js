module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      borderColor: (theme) => ({
        ...theme('colors'),
      }),
      colors: {
        dark: '#1A202C',
        primary: '#EDEEEE',
        borders: {
          footer: '#727272',
        },
      },
      fontFamily: {
        primary: ['IBM Plex Sans', 'sans'],
        secondary: ['Inter', 'sans'],
      },
      fontSize: {
        sm: '0.8em',
        base: '1em',
        md: '1.25em',
        lg: '1.563em',
        xl: '1.953em',
        '2xl': '2.441em',
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
    },
  },
  variants: {},
  plugins: [],
}
