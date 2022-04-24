module.exports = {
  rules: {
    "react/boolean-prop-naming": [
      "warn",
      { propTypeNames: ["bool", "mutuallyExclusiveTrueProps"] },
    ],
    "react/destructuring-assignment": ["warn", "always"],
    "react/forbid-dom-props": [
      "warn",
      {
        forbid: [
          {
            propName: "style",
            message: "Use the prop 'style' only for debugging.",
          },
        ],
      },
    ],
    "react/function-component-definition": [
      "warn",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/hook-use-state": "warn",
    "react/prop-types": "off",
    "react/no-invalid-html-attribute": "error",
    "react/no-multi-comp": ["warn", { ignoreStateless: true }],
    "react/self-closing-comp": "warn",
    "react/void-dom-elements-no-children": "error",
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
    "react/jsx-filename-extension": [
      "warn",
      { allow: "as-needed", extensions: [".tsx", ".jsx"] },
    ],
    "react/jsx-first-prop-new-line": "warn",
    "react/jsx-indent": [
      "warn",
      3,
      { checkAttributes: true, indentLogicalExpressions: false },
    ],
    "react/jsx-indent-props": ["warn", 2],
    "react/jsx-max-props-per-line": ["warn", { when: "multiline" }],
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        shorthandFirst: true,
        multiline: "last",
        reservedFirst: ["key", "ref"],
      },
    ],
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
