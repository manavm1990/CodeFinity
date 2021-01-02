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
    backgroundColor: theme => ({
      btn: "rgba(221,221,221,.25)",
      ...theme("colors"),
    }),
    boxShadow: { DEFAULT: "0 0 8px hsla(64, 100%, 50%,.5)" },
  },
  variants: {
    extend: {
      borderRadius: ["hover"],
      boxShadow: ["hover"],
      transform: ["hover"],
    },
  },
  plugins: [],
}
