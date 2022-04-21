module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      thinLightGreen: '#bbf7d0',
      lightGreen: '#4ade80',
      gray5: '#f9fafb',
      gray10: '#f3f4f6',
      gray30: '#d1d5db',
      gray20: '#dce7eb',
      gray40: '#9ca3af',
      red: '#dc2626',
    },
    extend: {
      height: {
        100: '25rem',
        120: '30rem',
        124: '31rem',
        125: '31.25rem',
        150: '37.5rem', // 600px
      },
      width: {
        82: '20.5rem',
        84: '21rem',
        92: '23rem',
        92: '23rem',
        187: '46.75rem', // 748px
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
