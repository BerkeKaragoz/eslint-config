const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");

module.exports = [
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  {
    settings: { react: { version: "detect" } },
    plugins: { react: react, "react-hooks": reactHooks },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react/boolean-prop-naming": [
        "warn",
        {
          propTypeNames: ["bool", "mutuallyExclusiveTrueProps"],
          rule: "^(is|disable|can|has)[A-Z]([A-Za-z0-9]?)+",
        },
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
      "react/jsx-filename-extension": [
        "warn",
        { extensions: [".tsx", ".jsx"] },
      ],
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
  },
];
