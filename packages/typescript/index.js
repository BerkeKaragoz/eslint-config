const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");

module.exports = [
  ...tseslint.config(eslint.configs.recommended, tseslint.configs.recommended),
  {
    rules: {
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
