### Install:

- NPM: `npm i -D eslint-config-berkekaragoz-typescript`
- Yarn: `yarn add -D eslint-config-berkekaragoz-typescript`
- PNPM: `pnpm i -D eslint-config-berkekaragoz-typescript`

# eslint-config-berkekaragoz-typescript

ESLint suggestions configuration aimed to have balanced aspects. A part of [eslint-config-berkekaragoz](https://www.npmjs.com/package/eslint-config-berkekaragoz).

_Wait for version 1._

## Usage

```yaml
extends:
  - berkekaragoz-typescript
```

### VSCode Settings

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Contents:

```js
{
  extends: ["plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-empty-function": "off",
  },
};
```

### Related:

- [eslint-config-berkekaragoz](https://www.npmjs.com/package/eslint-config-berkekaragoz)
- [eslint-config-berkekaragoz-react](https://www.npmjs.com/package/eslint-config-berkekaragoz-react)
- [eslint-config-berkekaragoz-formatting](https://www.npmjs.com/package/eslint-config-berkekaragoz-formatting)
