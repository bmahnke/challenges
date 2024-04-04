/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class',
  content: ["./src/**/*.{html,js,astro,react,vue,svelte,ts,tsx}"],
  safelist: [
    {
      pattern: /^[w|h]-\d{1}$/
    },
    {
      pattern: /^max-[w|h]-\d{1}$/
    },
    {
      pattern: /^order-[\d{1}, 'last']$/
    }
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        'primary-light': "rgb(var(--color-primary-light) / <alpha-value>)",
        'primary-lighter': "rgb(var(--color-primary-lighter) / <alpha-value>)",
        'primary-lightest': "rgb(var(--color-primary-lightest) / <alpha-value>)",
        'primary-dark': "rgb(var(--color-primary-dark) / <alpha-value>)",
        'primary-darker': "rgb(var(--color-primary-darker) / <alpha-value>)",
        'primary-darkest': "rgb(var(--color-primary-darkest) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      },
      maxWidth: {
        'half': '50%'
      }
    },

  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}

