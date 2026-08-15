/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F17",
        surface: {
          DEFAULT: "#111827",
          card: "rgba(17, 24, 39, 0.75)",
          hover: "rgba(31, 41, 55, 0.85)",
        },
        primary: {
          DEFAULT: "#0D9488",
          glow: "#14B8A6",
          dark: "#0F766E",
        },
        secondary: {
          DEFAULT: "#F59E0B",
          glow: "#FBBF24",
          dark: "#D97706",
        },
        accent: {
          cyan: "#06B6D4",
          blue: "#3B82F6",
        },
        border: {
          glass: "rgba(255, 255, 255, 0.1)",
          glassHover: "rgba(13, 148, 136, 0.4)",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        glowTeal: "0 0 25px -5px rgba(13, 148, 136, 0.5)",
        glowGold: "0 0 25px -5px rgba(245, 158, 11, 0.4)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
