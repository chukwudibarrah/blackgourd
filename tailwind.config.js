/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient ease-in-out linear infinite',
      },
      keyframes: {
        'gradient': {
          '0%, 100%': {
            '--color-start': '#ba7ba1',
            '--color-mid': '#ba7ba1',  
            '--color-end': '#ba7ba1',
          },
          '10%': {
            '--color-start': '#ba7ba1',
            '--color-mid': '#ba7ba1',  
            '--color-end': '#7e7ea3',
          },
          '20%': {
            '--color-start': '#7e7ea3',
            '--color-mid': '#7e7ea3',  
            '--color-end': '#7e7ea3',
          },
          '30%': {
            '--color-start': '#4281a4',
            '--color-mid': '#4281a4',  
            '--color-end': '#4281a4',
          },
          '40%': {
            '--color-start': '#4281a4',
            '--color-mid': '#4281a4',  
            '--color-end': '#4281a4',
          },
          '50%': {
            '--color-start': '#4281a4',
            '--color-mid': '#4281a4',  
            '--color-end': '#4281a4',
          },
          '60%': {
            '--color-start': '#4281a4',
            '--color-mid': '#9c7e73',  
            '--color-end': '#FFC0CB',
          },
          '70%': {
            '--color-start': '#9c7e73',
            '--color-mid': '#9c7e73',  
            '--color-end': '#ef7b45',
          },
          '80%': {
            '--color-start': '#ef7b45',
            '--color-mid': '#ef7b45',  
            '--color-end': '#ef7b45',
          },
          '90%': {
            '--color-start': '#ef7b45',
            '--color-mid': '#ef7b45',  
            '--color-end': '#7e7ea3',
          },
          '100%': {
            '--color-start': '#7e7ea3',
            '--color-mid': '#7e7ea3',  
            '--color-end': '#7e7ea3',
          },
        },
      },
      colors: {
        feldgrau: '#395B50',
        crayola: "#EF7B45",
        gunmetal: "#183642",
        cosmiclatte: "#F7F3E3",
        engviolet: "#BA7BA1",
      },
      backgroundImage: {
        'desktop': "url('https://raw.githubusercontent.com/chukwudibarrah/blackgourd/main/public/web.webp')",
        'mobile': "url('https://raw.githubusercontent.com/chukwudibarrah/blackgourd/main/public/mobile.webp')",
        'tab': "url('https://raw.githubusercontent.com/chukwudibarrah/blackgourd/main/public/tab.webp')",
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
    fontFamily: {
      vollkorn: ["Vollkorn", "serif"],
      montserrat: ["Montserrat", "sans-serif"],
      sourcecode: ["Source Code Pro", "monospace"],
    },
  },
  plugins: ["@tailwindcss/typography"],
};
