/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#070B17',
        electric: '#7C8BFF',
        mint: '#6EE7D8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124,139,255,0.25), 0 20px 60px rgba(12,20,48,0.45)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at 20% 20%, rgba(124,139,255,0.24), transparent 45%), radial-gradient(circle at 80% 30%, rgba(110,231,216,0.16), transparent 40%)',
      },
    },
  },
  plugins: [],
}
