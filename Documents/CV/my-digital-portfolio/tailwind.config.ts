import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark Green (Primary - Dark Mode)
        'dark-green': {
          50: '#f0f7f4',
          100: '#d4e8e0',
          200: '#b8dac5',
          300: '#7d5e48',
          400: '#2d5a4a',
          500: '#1b4d3e', // Main dark green
          600: '#164239',
          700: '#0f2f28',
          800: '#0a1f1a',
          900: '#050f0c',
        },
        // Beige (Primary - Light Mode)
        'beige': {
          50: '#fefdfb',
          100: '#fdfaf3',
          200: '#f5ede2',
          300: '#e8dcc9',
          400: '#d9c5a8',
          500: '#c9ae87', // Main beige
          600: '#b89968',
          700: '#a67d52',
          800: '#8b6f4e',
          900: '#6b5439',
        },
      },
      backgroundColor: {
        'light': '#fefdfb',
        'dark': '#050f0c',
      },
      textColor: {
        'light-primary': '#1b4d3e',
        'dark-primary': '#c9ae87',
      },
    },
  },
  plugins: [],
}

export default config
