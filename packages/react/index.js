module.exports = {
  env: { browser: true, es2021: true },
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: { react: { version: "detect" } },
  plugins: ["react"],
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
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx", ".jsx"] }],
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        shorthandFirst: true,
        multiline: "last",
        reservedFirst: ["key", "ref"],
      },
    ],
  },
};
