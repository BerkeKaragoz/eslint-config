module.exports = {
  rules: {
    "react/jsx-boolean-value": ["warn", "never"],
    "react/jsx-closing-bracket-location": "warn",
    "react/jsx-closing-tag-location": "warn",
    "react/jsx-curly-brace-presence": ["warn", "never"],
    "react/jsx-curly-newline": [
      "warn",
      { singleline: "forbid", multiline: "require" },
    ],
    "react/jsx-curly-spacing": [
      "warn",
      {
        when: "never",
        children: { when: "never" },
        attributes: { allowMultiline: false },
      },
    ],
    "react/jsx-equals-spacing": ["warn", "never"],
    "react/jsx-first-prop-new-line": "warn",
    "react/jsx-indent": [
      "warn",
      3,
      { checkAttributes: true, indentLogicalExpressions: false },
    ],
    "react/jsx-indent-props": ["warn", 2],
    "react/jsx-max-props-per-line": ["warn", { when: "multiline" }],
    "react/jsx-tag-spacing": "warn",
    "react/jsx-wrap-multilines": [
      "warn",
      {
        declaration: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "ignore",
      },
    ],
  },
};
