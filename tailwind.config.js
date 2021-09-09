module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },
  theme: {
    extend: {
      keyframes: {
        bounces: {
          '0%, 100%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)'
          },
          '50%': {
            transform: 'translateY(25%)',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)'
          }
        }
      },
      animation: {
        bounces: 'bounces 1s ease-in-out infinite'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      inset: ['checked'],
      zIndex: ['hover', 'active'],
      backgroundColor: ['dark'],
      textColor: ['dark'],
    }
  },
  plugins: [require('tailwind-scrollbar-hide')],
  future: {
    purgeLayersByDefault: true
  }
};
