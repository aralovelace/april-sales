module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './templates/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bridge-red': '#DB2F20',
        'bridge-purple': '#5F259F',
        'bridge-light-purple':'#C7B3DD',
        'bridge-black':'#2B2B2B',
        'bridge-grey':'#979797',
        'bridge-red':'#DB2F20'
      },
      width: {
        'check-buttons':'324px',
      },
      height: {
        'check-buttons':'72px',
      },
      fontSize: {
        'labelHeader':'2rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
