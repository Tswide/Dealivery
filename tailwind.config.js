/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   white: "#ffffff",
    //   primary: { //green
    //     DEFAULT: "#73CBA7", // background - text
    //     600: "#1BBC7A", // hover
    //     700: "#83DA3F", // special flashy green
    //   },
    //   secondary: { // red
    //     300: "#FEE2E2", // hover
    //     400: "#FFD2D1", // background
    //     500: "#FCA5A5", // stroke
    //     DEFAULT: "#B91C1C", // text
    //   },
    // },
    fontSize: {
      '4xl': [
        '55px', {
          fontWeight: '700',
        }],
      '3xl': [
        '36px', {
          fontWeight: '700',
        }],
      '2xl': [
        '32px', {
          lineHeight: '36px',
          fontWeight: '700',
        }],
      xl: [
        '30px', {
          lineHeight: '34px',
          fontWeight: '700',
        }],
      lg: [
        '18px', {
          lineHeight: '28px',
          fontWeight: '600',
        }],
      base: [
        '17px', {
          lineHeight: '25px',
          fontWeight: '500',
        }],
      sm: [
        '15px', {
          lineHeight: '23px',
          fontWeight: '500',
        }],
      'badge': [
        '13px', {
          lineHeight: '23px',
          fontWeight: '500',
        }],
    },
    borderRadius: {
      DEFAULT: "6px",
      full: "9999px",
    },

    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
  ],
}

