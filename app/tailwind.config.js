/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f1f8f2',
          100: '#dff1e4',
          200: '#bfe3c8',
          300: '#9ad3aa',
          400: '#6fbd87',
          500: '#43a35f',
          600: '#2f8248',
          700: '#23663a',
          800: '#1d5231',
          900: '#18442a'
        },
        darkGreen: '#0f2a1f',
        cityGray: '#f3f5f7'
      },
      fontFamily: {
        display: ['"Sora"', 'system-ui', 'sans-serif'],
        body: ['"Urbanist"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glass: '0 20px 60px -35px rgba(10, 80, 40, 0.65)',
        soft: '0 18px 40px -28px rgba(15, 30, 20, 0.45)'
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top left, rgba(67, 163, 95, 0.35), transparent 52%), radial-gradient(circle at 20% 30%, rgba(15, 42, 31, 0.25), transparent 45%), linear-gradient(120deg, rgba(15, 42, 31, 0.95), rgba(22, 60, 40, 0.9), rgba(28, 90, 60, 0.9))'
      }
    }
  },
  plugins: []
}
