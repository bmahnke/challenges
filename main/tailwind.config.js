/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class',
  content: ["./src/**/*.{html,js,astro,react,vue,svelte,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}

