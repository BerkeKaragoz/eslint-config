module.exports = {
  rules: {
    curly: ["warn", "multi"],
    eqeqeq: "error",
    "arrow-body-style": ["warn", "as-needed"],
    "no-empty": ["warn", { allowEmptyCatch: false }],
    "no-else-return": "warn",
    "no-restricted-syntax": [
      "warn",
      {
        selector: "FunctionExpression",
        message:
          "Function expressions are not allowed, use the arrow notation.",
      },
    ],
    "no-return-await": "warn",
    "prefer-arrow-callback": "warn",
    "sort-imports": "warn",
    "spaced-comment": [
      "warn",
      "always",
      { line: { exceptions: ["/"] }, block: { exceptions: ["*"] } },
    ],
    yoda: "warn",
  },
};
