/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F86C6',
          50: '#EDF3FA',
          100: '#D2E2F4',
          200: '#A6C4E9',
          300: '#79A7DE',
          400: '#4D89D3',
          500: '#4F86C6',
          600: '#3D6CA0',
          700: '#2E527A',
          800: '#1F3853',
          900: '#0F1E2D',
        },
        secondary: {
          DEFAULT: '#65C9C1',
          50: '#F0FAFA',
          100: '#D8F2F0',
          200: '#B1E5E1',
          300: '#8AD9D3',
          400: '#63CCC4',
          500: '#65C9C1',
          600: '#50A19A',
          700: '#3C7874',
          800: '#28504D',
          900: '#142827',
        },
        accent: {
          DEFAULT: '#FF9966',
          50: '#FFF5F0',
          100: '#FFE4D6',
          200: '#FFCAAD',
          300: '#FFAF85',
          400: '#FF955C',
          500: '#FF9966',
          600: '#CC7A52',
          700: '#995C3D',
          800: '#663D29',
          900: '#331F14',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Nunito', 'system-ui', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};