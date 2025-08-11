/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-light-gradient': 'linear-gradient(to right, #6b7280, #7c3aed, #6b7280)',
        'custom-dark-gradient': 'linear-gradient(to right, #2c3e50, #485460, #4b79a1)',
      }),
      borderColor: theme => ({
        ...theme('colors'),
        DEFAULT: theme('colors.transparent', 'currentColor'), // Set default border color to transparent
      }),
    },
  },
  plugins: [],
}
