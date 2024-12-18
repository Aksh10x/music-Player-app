/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      keyframes:{
        playEntry:{
        '0%':{transform: 'translateY(20px)',opacity: "0"},
        '100%':{transform: 'translateY(0)',opacity:"1"},
        },
      },
      animation:{
        playEntry: "playEntry 0.2s ease-in-out",
      },
    },
  },
  plugins: [],
}

