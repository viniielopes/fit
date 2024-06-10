/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      sm: ['1rem', '1.25rem'],
      base: ['1.25rem', '1.5rem'],
      md: ['1.5rem', '2rem'],
      lg: ['20px', '28px'],
      xl: ['2.5rem', '3rem'],
      modal: {
        header: ['2rem', '2.5rem'],
      },
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#111111',
      primary: '#0093E6',
      gray: {
        100: '#F0F0F0',
        200: '#E0E0E2',
      },
      red: {
        100: '#AD0000',
        200: '#A70000',
      },
    },
    extend: {
      spacing: {
        1: '1rem',
        2: '1.5rem',
        3: '2rem',
        4: '2.5rem',
        5: '3rem',
        6: '4rem',
        7: '5rem',
        8: '5.5rem',
        9: '6.25rem',
      },
      borderRadius: {
        sm: '0.75rem',
        md: '1rem',
        lg: '6.25rem',
      },
      fontFamily: {
        inter: ['"Inter", sans-serif'],
      },
    },
  },
  plugins: [],
}

// h1: {
//   font-size: 2.5rem;
//   line-height: 3rem;
//   font-weight: 600;
// }
// h2: {
// font-size: 1.5rem;
// line-height: 2rem;
// font-weight: 600;
// }
// subtitle: {
//   font-size: 1.25rem;
//   line-height: 1.5rem;;
//   font-weight: 500;
// }
//  input{
//   font-size: 1rem;
//   line-height: 1.5rem;;
//   font-weight: 400;
// }
// button: {
// font-size: 1.5rem;
// line-height: 2rem;
// font-weight: 600;
// }
// paragraph: {
// font-size: 1rem;
// line-height: 1.5rem;
// font-weight: 400;
// }
//
//
// modal: {
// button: {
// font-size: 1rem;
// line-height: 1.25rem;
// font-weight: 500;
//
// }
// header: {
// font-size: 2rem;
// line-height: 2.5rem;
// font-weight: 600;
// }
// }
