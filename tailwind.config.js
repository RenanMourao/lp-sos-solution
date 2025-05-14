/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lastica: ['Lastica', 'sans-serif'],
      },
      // Se quiser adicionar um breakpoint extra (ex: xs: 320px), pode fazer aqui:
      // screens: {
      //   'xs': '320px',
      // },
    },
  },
  plugins: [],
}
