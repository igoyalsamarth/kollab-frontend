/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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

