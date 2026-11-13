/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./wawasan/**/*.html", "./src/**/*.js", "./scripts/**/*.js", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        cloud: '#F8FAFC',
        sky: { DEFAULT: '#2C99D6', dark: '#1E7BB0' },
        scarlet: { DEFAULT: '#EB2F33', hover: '#C81E22' },
        ink: { DEFAULT: '#0F172A', soft: '#475569' }
      },
      fontFamily: {
        display: ['"Anton"', '"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      }
    }
  },
  plugins: []
};
