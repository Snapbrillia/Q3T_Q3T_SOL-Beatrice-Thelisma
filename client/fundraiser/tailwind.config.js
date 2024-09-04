/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
       boxShadow: {
        "form_shadow": "-5px 20px 24px -4px #2b353914,0 8px 8px -4px #2b35390a",
      },
    },
  },
  plugins: [],
}
