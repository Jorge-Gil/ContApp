/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  colors: {
      paleta: {
        AzulOscuro: '#02103F',
        grisclaro: '#EEEEEE',

      },
    }},
  },
  plugins: [],
}
