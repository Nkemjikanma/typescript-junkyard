/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monserat: ["Montserrat", "sans-serif"]
      },
      backgroundImage: {
        'bg-todo-list': "url('https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg')"
      }
    },
  },
  plugins: [],
}
