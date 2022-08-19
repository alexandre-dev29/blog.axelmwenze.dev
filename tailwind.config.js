/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './apps/front/pages/**/*.{js,ts,jsx,tsx}',
    './apps/front/components/**/*.{js,ts,jsx,tsx}',
    './libs/ui/src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: { css: { pre: false } },
        sm: { pre: false },
        lg: { pre: false },
        xl: { pre: false },
        '2xl': { pre: false },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
