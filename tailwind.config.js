/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        souvenir: {
          // Couleur bleue principale (boutons, accents)
          primary: '#4169E1', // Le bleu des boutons "Créer un souvenir"
          // Couleurs secondaires
          yellow: '#FFE44D', // Pour les bordures jaunes des photos
          text: {
            DEFAULT: '#1A1A1A', // Texte principal
            secondary: '#666666', // Texte secondaire
          },
          background: {
            light: '#FFFFFF', // Fond blanc
            gray: '#F5F5F5',  // Fond gris clair pour certaines sections
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Police principale
      },
      spacing: {
        '18': '4.5rem', // Pour les espacements spécifiques si nécessaire
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}