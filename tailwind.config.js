/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        'gradient': {
          to: { 'background-position': '200% center' },
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
