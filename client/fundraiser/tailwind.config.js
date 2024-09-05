/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        "primary_color":"#270722",
        "secondary_color":"#ECCE8E",

      },
       boxShadow: {
        "form_shadow": "-5px 20px 24px -4px #2b353914,0 8px 8px -4px #2b35390a",
      },
    },
  },
  plugins: [],
}
