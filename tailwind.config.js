/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['"Noto Sans"', 'sans-serif'],
      serif: ['Cinzel', 'serif'],
    },
    extend: {
      colors: {
        'hippie-green': {
          50: '#f4f9f4',
          100: '#e7f2e6',
          200: '#cfe4ce',
          300: '#a9cea7',
          400: '#7bb078',
          500: '#50874e',
          600: '#447742',
          700: '#385f36',
          800: '#304c2f',
          900: '#283f28',
          950: '#122112',
        },
      },
    },
  },
  plugins: [],
};
