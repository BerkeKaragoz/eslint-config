Install:

- NPM: `npm i -D eslint-config-berkekaragoz-formatting`
- Yarn: `yarn add -D eslint-config-berkekaragoz-formatting`
- PNPM: `pnpm i -D eslint-config-berkekaragoz-formatting`

# eslint-config-berkekaragoz-formatting

ESLint formatting configuration aimed to have balanced aspects. A part of [eslint-config-berkekaragoz](https://www.npmjs.com/package/eslint-config-berkekaragoz).

_Wait for version 1._

## Usage

```yaml
extends:
  - berkekaragoz-formatting
```

### VSCode Settings

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.format.enable": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "indentRainbow.ignoreErrorLanguages": ["*"],
  "indentRainbow.colorOnWhiteSpaceOnly": true
}
```

## Contents:

```js
{
  rules: {
    "array-bracket-newline": ["warn", { multiline: true }],
    "array-bracket-spacing": ["warn", "never"],
    "array-element-newline": ["warn", "consistent"],
    "arrow-spacing": ["warn", { before: true, after: true }],
    "block-spacing": ["warn", "always"],
    "brace-style": "warn",
    "comma-dangle": ["warn", "always-multiline"],
    "comma-spacing": ["warn", { before: false, after: true }],
    "comma-style": "warn",
    "computed-property-spacing": "warn",
    "dot-location": ["warn", "property"],
    "eol-last": "warn",
    "func-call-spacing": "warn",
    "function-call-argument-newline": ["warn", "consistent"],
    "function-paren-newline": "warn",
    "generator-star-spacing": ["warn", { before: false, after: true }],
    "implicit-arrow-linebreak": ["warn", "beside"],
    indent: ["warn", 3, { ignoredNodes: ["JSXElement *"] }],
    "key-spacing": "warn",
    "keyword-spacing": "warn",
    "line-comment-position": "off",
    "linebreak-style": ["warn", "unix"],
    "lines-around-comment": "warn",
    "max-len": ["warn", { code: 90, ignoreStrings: true }],
    "max-statements-per-line": "warn",
    "multiline-ternary": ["warn", "always-multiline"],
    "new-parens": "warn",
    "newline-per-chained-call": ["warn", { ignoreChainWithDepth: 3 }],
    "no-extra-parens": "warn",
    "no-multi-spaces": [
      "warn",
      { ignoreEOLComments: true, exceptions: { Property: true } },
    ],
    "no-multiple-empty-lines": ["warn", { max: 2, maxEOF: 0 }],
    "no-trailing-spaces": ["warn", { skipBlankLines: true }],
    "no-whitespace-before-property": "warn",
    "nonblock-statement-body-position": ["warn", "below"],
    "object-curly-newline": ["warn", { ObjectExpression: { multiline: true } }],
    "object-curly-spacing": ["warn", "always"],
    "object-property-newline": ["warn", { allowAllPropertiesOnSameLine: true }],
    "operator-linebreak": ["warn", "after"],
    "padded-blocks": [
      "warn",
      { blocks: "never", classes: "never", switches: "always" },
    ],
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "import", next: "*" },
      { blankLine: "never", prev: "import", next: "import" },
      { blankLine: "always", prev: "multiline-block-like", next: "*" },
      { blankLine: "always", prev: "if", next: "*" },
      { blankLine: "always", prev: "for", next: "*" },
      { blankLine: "always", prev: "while", next: "*" },
      { blankLine: "always", prev: "switch", next: "*" },
      { blankLine: "always", prev: "*", next: "multiline-block-like" },
      { blankLine: "always", prev: "*", next: "if" },
      { blankLine: "always", prev: "*", next: "for" },
      { blankLine: "always", prev: "*", next: "while" },
      { blankLine: "always", prev: "*", next: "switch" },
    ],
    quotes: ["warn", "double", { allowTemplateLiterals: true }],
    "rest-spread-spacing": "warn",
    semi: ["warn", "never"],
    "semi-spacing": "warn",
    "semi-style": "warn",
    "space-before-blocks": "warn",
    "space-before-function-paren": "warn",
    "space-in-parens": "warn",
    "space-infix-ops": "warn",
    "space-unary-ops": "warn",
    "switch-colon-spacing": "warn",
    "template-curly-spacing": "warn",
    "template-tag-spacing": "warn",
    "wrap-iife": ["warn", "inside"],
    "wrap-regex": "off",
    "yield-star-spacing": ["warn", "after"],
  },
};
```

Related:

- [eslint-config-berkekaragoz](https://www.npmjs.com/package/eslint-config-berkekaragoz)
- [eslint-config-berkekaragoz-suggestions](https://www.npmjs.com/package/eslint-config-berkekaragoz-suggestions)
- [eslint-config-berkekaragoz-react](https://www.npmjs.com/package/eslint-config-berkekaragoz-react)
