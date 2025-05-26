/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,scss}'],
  theme: {
    extend: {
      colors: {
        sky: {
          500: 'var(--color-sky-500)',
        },
        brand: {
          primary: 'var(--color-brand-primary)',
          secondary: 'var(--color-brand-secondary)',
          info: 'var(--color-brand-info)',
          light: 'var(--color-brand-light)',
          body: {
            bg: 'var(--color-brand-body-bg)',
            color: 'var(--color-brand-body-color)',
          },
          nav: {
            link: {
              color: 'var(--color-brand-nav-link-color)',
              hover: 'var(--color-brand-nav-link-hover)',    
            }
          }
        }
      },
      fontFamily: {
        headings: ['"Poppins"', 'sans-serif'],
        base: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

