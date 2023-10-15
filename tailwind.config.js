/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark' : 'rgb(34 34 59)',
        'bg-dark2' : 'rgb(74 78 105)',
      },
    },
  },
  plugins: [],
}

