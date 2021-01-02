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
  rules: {
    "import/no-unresolved": 1,
    "import/prefer-default-export": 1,
    "no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "react/react-in-jsx-scope": 0,
  },
}
