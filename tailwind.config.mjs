/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        purple: {
          100: '#DBD1FC',
          500: '#7551DC'
        },
        yellow: {
          100: '#F9EEE2',
          500: '#FFCC6A'
        },
        black: '#121212',
        'wild-sand': { 50: '#F6F5F6' }
      },
      spacing: {
        100: '0.5rem', // 8px
        200: '1rem', // 16px
        300: '1.5rem', // 24px
        400: '2rem', // 32px
        500: '2.5rem' // 40px
      }
    }
  },
  plugins: []
};
