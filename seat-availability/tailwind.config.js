/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      keyframes: {
        floatBolt: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-40px)' },
        },
        moveEV: {
          '0%': { transform: 'translateX(-100px)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-green': {
          '0%, 100%': {
            boxShadow: '0 0 10px rgba(34,197,94,0.6), 0 0 20px rgba(16,185,129,0.4)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(34,197,94,0.9), 0 0 40px rgba(16,185,129,0.6)',
          },
        },
        'pulse-blue': {
          '0%, 100%': {
            boxShadow: '0 0 10px rgba(59,130,246,0.6), 0 0 20px rgba(37,99,235,0.4)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(59,130,246,0.9), 0 0 40px rgba(37,99,235,0.6)',
          },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.4s ease forwards',
        'pulse-green': 'pulse-green 2s infinite ease-in-out',
        'pulse-blue': 'pulse-blue 2s infinite ease-in-out',
        floatBolt: 'floatBolt 4s infinite ease-in-out',
        moveEV: 'moveEV 12s linear infinite',
        pulseGreen: 'pulse 2s infinite',
        pulseBlue: 'pulse 2s infinite',
      },
      boxShadow: {
        'ev-glow': '0 0 15px rgba(34, 197, 94, 0.6), 0 0 30px rgba(16, 185, 129, 0.4)',
      },
    },
  },
  plugins: [],
}

