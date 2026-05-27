/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores principais (direto da logo)
        'verde-casa': '#2C4C3B',  // Verde escuro dos números "210"
        'areia-casa': '#C69C6D',  // Dourado do coqueiro e da palavra "CASA"
        'onda-casa': '#4A9087',   // Verde-água/teal das ondas

        // Cores de apoio (tons suaves para fundos, bordas e hovers)
        'verde-claro': '#EAF0EB', // Verde bem suave para caixas de informação
        'areia-clara': '#FCFAF6', // Areia quase branca, perfeita para o fundo do site
        'onda-clara': '#E3EFEF',  // Verde-água bem clarinho para detalhes
      }
    },
  },
  plugins: [],
}