module.exports = {
  purge: ["./src/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: () => ({ primary: "rebeccapurple" }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
