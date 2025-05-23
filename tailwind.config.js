/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,scss}'],
  theme: {
    extend: {
      colors: {
        sky: {
          500: 'var(--color-sky-500)',
        },
        uoc: {
          corporate: 'var(--color-uoc-corporate)',
          masterbrand: 'var(--color-uoc-masterbrand)',
        }
      },
    },
  },
  plugins: [],
}

