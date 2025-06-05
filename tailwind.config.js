/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-brand-primary)',        // #008878
          primaryDark: 'var(--color-brand-primary-dark)', // ##008a7a
          secondary: 'var(--color-brand-secondary)',    // #EAAE17
          info: 'var(--color-brand-info)',              // #005878
          light: 'var(--color-brand-light)',            // #FAFAF9
          bg: 'var(--color-brand-body-bg)',             // #ffffff
          text: 'var(--color-brand-body-text)',         // #2e2e2e
          cards: 'var(--color-brand-cards-bg)',         // rgba(0, 136, 120, 0.7)
          cardsSecondary: 'var(--color-brand-cards-bg-secondary)', // rgba(234, 174, 23, 0.5)
          body: {
            color: 'var(--color-brand-body-color)',     // #000
          },
          nav: {
            link: {
              color: 'var(--color-brand-nav-link-color)',   // #000
              hover: 'var(--color-brand-nav-link-hover)',   // #fff
            }
          }
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
      },
      screens: {
        'xl-plus': '1440px',
      },
      backgroundImage: {
        'hero-bg': "url('../images/header-blog.jpg')",
      },
    },
  },
  plugins: [],
}

