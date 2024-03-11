/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,astro,react,vue,svelte,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}

