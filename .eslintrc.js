module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    `react-app`,
    "airbnb",
    "airbnb/hooks",
    "prettier",
    "prettier/react",
  ],
  rules: { "react/react-in-jsx-scope": 0 },
}
