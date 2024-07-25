/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      primary: { //primary
        50: "#f0fdf4",
        200: "#bbf7d0",
        DEFAULT: "#4ade80", // button 400
        500: "#22c55e",
        600: "#16a34a", // text
        700: "#15803d", // text
      },
      red: {
        50: "#fef2f2",
        200: "#fecaca",
        300: "#FEE2E2", // hover
        400: "#FFD2D1", // background
        500: "#FCA5A5", // stroke
        DEFAULT: "#B91C1C", // text 700
      },
      yellow: {
        50: "#fefce8",
        200: "#fef08a",
        800: "#854d0e", // hover
      },
      blue: {
        50: "#eff6ff",
        200: "#bfdbfe",
        700: "#1d4ed8",
      },
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        400: "#94a3b8",
        500: "#6b7280",
        700: "#374151",
        default: "#111827", //900
      },
    },
    fontSize: {
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
          fontWeight: '600',
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
        '11px', {
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

