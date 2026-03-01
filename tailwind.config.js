/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pearl: '#f7f8fa',
        ink: '#101828',
        slate: '#667085',
        line: '#d0d5dd',
        electric: '#4f46e5',
        mint: '#0f766e',
        panel: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(16,24,40,0.04), 0 14px 32px rgba(16,24,40,0.06)',
        glow: '0 0 0 1px rgba(79,70,229,0.12), 0 16px 42px rgba(79,70,229,0.15)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at 0% 0%, rgba(79,70,229,0.10), transparent 44%), radial-gradient(circle at 90% 20%, rgba(15,118,110,0.08), transparent 42%)',
      },
    },
  },
  plugins: [],
}
