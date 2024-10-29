/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
        '3xl': '2100px'
      },
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
        13: '3.25rem', // 52px
        15: '3.75rem', // 60px
        18: '4.5rem', // 72px
        19: '4.75rem', // 76px
        21: '5.25rem', // 84px
        41: '10.25rem', // 164px
        45: '11.25rem', // 180px
        47.5: '11.875rem', // 190px
        50: '12.5rem', // 200px
        55: '13.75rem', // 220px
        57: '14.25rem', // 228px
        77: '19.25rem', // 308px
        79: '19.75rem', // 316px
        89: '22.25rem', // 356px
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
