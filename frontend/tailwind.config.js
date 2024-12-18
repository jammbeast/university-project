/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      extend: {
        fontFamily: {
          'teko': ['Teko', 'sans-serif'],
          'text-me-one': ['Text Me One', 'sans-serif'],
          'roboto-mono': ['"Roboto Mono"', 'monospace'],
          'bebas-neue' : ['Bebas Neue', 'sans-serif'],
          'rubik-mono-one-regular': ['Rubik Mono One', 'monospace'],
          'anonymous-pro-regular' : ['Anonymous Pro', 'monospace'],
          'ibm-plex-mono-regular' : ['IBM Plex Mono', 'monospace'],
          'pt-mono-regular' : ['PT Mono', 'monospace'],
          
        },
        
      },
    },
  plugins: [],
}
