/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF4D00', // The bright orange button color
          dark: '#1A1A1A',   // The dark text color
          gray: '#F5F5F5',   // The light gray background sections
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // We'll use Inter as it matches the clean look
      }
    },
  },
  plugins: [],
}