/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {},
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '520px',
      // => @media (min-width: 768px) { ... }

      'lg': '760px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
    
  },
}
