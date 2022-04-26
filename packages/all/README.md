Install:

- NPM: `npm i -D eslint-config-berkekaragoz`
- Yarn: `yarn add -D eslint-config-berkekaragoz`
- PNPM: `pnpm i -D eslint-config-berkekaragoz`

# eslint-config-berkekaragoz

ESLint configuration aimed to have balanced aspects.

_Wait for version 1._

## Usage

```yaml
extends:
  - berkekaragoz
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
  extends: [
    "eslint:recommended",
    "berkekaragoz-suggestions",
    "berkekaragoz-formatting",
    "berkekaragoz-react",
  ],
};
```

### Related

- [eslint:recommended](https://github.com/eslint/eslint/blob/main/conf/eslint-recommended.js)
- [eslint-config-berkekaragoz-suggestions](https://www.npmjs.com/package/eslint-config-berkekaragoz-suggestions)
- [eslint-config-berkekaragoz-formatting](https://www.npmjs.com/package/eslint-config-berkekaragoz-formatting)
- [eslint-config-berkekaragoz-react](https://www.npmjs.com/package/eslint-config-berkekaragoz-react)
