/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["League Spartan", "sans-serif"],
    },

    extend: {
      colors: {
        'carbon-blue': '#373B53',
        "dark-slate-blue": "#7C5DFA",
        'periwinkle': "#9277FF",
        "kon-color": "#1E2139",
        "royal-curtsy": "#252945",
        "stoic-white": "#DFE3FA",
        "popilio-argious": "#888EB0",
        "true-lavender": "#7E88C3",
        "ruined-smores": "#0C0E16",
        "american-pink": "#FF9797",
        "khmer-curry": "#EC5757",
        "river-styx": "#141625",
        "pearl-white": "#F8F8FB",
      },
      backgroundImage: {
        'logo-bg': "url('./assets/logo-bg.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
