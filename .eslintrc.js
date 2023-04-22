module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: ["prettier"],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIngnorePattern: "^_",
      },
    ],
    "no-unused-vars": "off",
    "no-shadow": "off",
    "typescript-eslint/no-shadow": 11,
    "no-undef": "off",
  },
};
