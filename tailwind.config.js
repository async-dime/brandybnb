module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
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
    extend: {}
  },
  plugins: [require('tailwind-scrollbar-hide')]
};
