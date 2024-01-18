/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.39) 0%, #4C74DA 100%)'
      }),
      fontFamily: {
        moderno: ['MuseoModerno', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
    },
    animation: {
      loader: 'loader 1s infinite alternate'
    },
    keyframes: {
      loader: {
        to: {
          transform: 'translate3d(0, -1rem, 0)'
        }
      }
    }
  },
  plugins: [],
}

