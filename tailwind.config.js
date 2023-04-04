/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Outfit': ['Outfit'],
    },
    extend: {  colors: {
      paleta: {
        AzulOscuro: '#00165B',
        grisclaro: '#EEEEEE',
        AzulFooter: '#001043',
        MoradoFondo: '#2A1C7D',
        MoradoBoton: '#645ADF',
        AzulClaro: '#3B82F6',
        AzulResaltado: '#00E0FF',
        FondoPerfil: '#02103F',
      },
      fontFamily: {
        'Outfit': ['Outfit'],
      },
    }},
  },
  plugins: [],
}
