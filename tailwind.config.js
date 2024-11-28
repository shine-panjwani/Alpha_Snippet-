/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "ssm":'500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      keyframes: {
        leBeat: {
          '14%, 42%': { transform: 'scale(1.3)' },
          '28%, 70%': { transform: 'scale(1)' },
        },
      },
      animation: {
        leBeat: 'leBeat 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
