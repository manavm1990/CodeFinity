const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: ["Ubuntu", ...defaultTheme.fontFamily.mono],
      },
      width: {
        "50vw": "50vw",
      },
      zIndex: {
        "-1": "-1",
      },
    },
    backgroundColor: () => ({ primary: "rebeccapurple" }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
