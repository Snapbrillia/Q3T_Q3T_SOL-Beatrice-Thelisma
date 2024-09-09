/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        blk_graet_bg:"linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
        blkGradient: "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
      },
      colors:{
        "primary_color":"#270722",
        "secondary_color":"#ECCE8E",

      },
       boxShadow: {
        "form_shadow": "-5px 20px 24px -4px #2b353914,0 8px 8px -4px #2b35390a",
        light_shadow:"0px 0px 6px 4px rgba(219, 218, 218, 0.308)"
      },
    },
  },
  plugins: [],
}
  