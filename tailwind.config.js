/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  }, theme: {
    extend: {
      boxShadow: {
        neumorphism: "8px 8px 15px #bebebe, -8px -8px 15px #ffffff",
        "neumorphism-hover": "12px 12px 20px #bebebe, -12px -12px 20px #ffffff",
        "neumorphism-button": "4px 4px 6px #bebebe, -4px -4px 6px #ffffff",
        "neumorphism-button-hover": "6px 6px 8px #bebebe, -6px -6px 8px #ffffff",
        'neumorphism-black': '4px 4px 10px rgba(0, 0, 0, 0.4), -4px -4px 10px rgba(255, 255, 255, 0.1)',
      },
      colors: {
        'neumorphic-black': '#1a1a1a',
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Roboto', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      }
    },
  },
  plugins: [],
}