Install:

- NPM: `npm i -D eslint-config-berkekaragoz-suggestions`
- Yarn: `yarn add -D eslint-config-berkekaragoz-suggestions`
- PNPM: `pnpm i -D eslint-config-berkekaragoz-suggestions`

# eslint-config-berkekaragoz-suggestions

ESLint suggestions configuration aimed to have balanced aspects. A part of [eslint-config-berkekaragoz](https://www.npmjs.com/package/eslint-config-berkekaragoz).

_Wait for version 1._

Contents:

```js
{
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
```

Related:

- [eslint-config-berkekaragoz](https://www.npmjs.com/package/eslint-config-berkekaragoz)
- [eslint-config-berkekaragoz-react](https://www.npmjs.com/package/eslint-config-berkekaragoz-react)
- [eslint-config-berkekaragoz-formatting](https://www.npmjs.com/package/eslint-config-berkekaragoz-formatting)
