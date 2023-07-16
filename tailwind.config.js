/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    maxWidth: {
      'container': '1440px',
      'contentContainer': '1140px',
      'containerSmall': '1024px',
      'containerXs': '768px',
    },
    extend: {
      screens: {
        'xs': '320px',
        'sm': '375px',
        'sml': '500px',
        'md': '667px',
        'mdl': '768px',
        'lg': '960px',
        'lgl': '1024px',
        'xl': '1280px',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'navShadow' : "0 10px 30px -10px rgba(2, 12, 27, 0.7)",
      },
      colors: {
        'bodyColor': '#0A192F',
        'textGreen': '#64ffda',
        'textDark': '#8892b0',
        'textLight': '#ccd6f6',
        'hoverColor': 'rgba(100, 255, 218, 0.1)',
      },
    },
  },
  plugins: [],
}
