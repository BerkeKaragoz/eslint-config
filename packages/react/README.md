Install:

- NPM: `npm i -D eslint-config-berkekaragoz-react`
- Yarn: `yarn add -D eslint-config-berkekaragoz-react`
- PNPM: `pnpm i -D eslint-config-berkekaragoz-react`

# eslint-config-berkekaragoz-react

ESLint React configuration aimed to have balanced aspects. A part of [eslint-config-berkekaragoz](https://www.npmjs.com/package/eslint-config-berkekaragoz).

## Usage

```yaml
extends:
  - berkekaragoz-react
```

### VSCode Settings

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "indentRainbow.ignoreErrorLanguages": ["*"],
  "indentRainbow.colorOnWhiteSpaceOnly": true
}
```

## Contents:

ESLint configs:

- `berkekaragoz-react`
- `berkekaragoz-react/formatting`

`berkekaragoz-react` contents:

```js
{
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
    "react/jsx-filename-extension": [ "warn", { extensions: [".tsx", ".jsx"] }],
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
```

Related:

- [eslint-config-berkekaragoz](https://www.npmjs.com/package/eslint-config-berkekaragoz)
- [eslint-config-berkekaragoz-suggestions](https://www.npmjs.com/package/eslint-config-berkekaragoz-suggestions)
- [eslint-config-berkekaragoz-formatting](https://www.npmjs.com/package/eslint-config-berkekaragoz-formatting)
