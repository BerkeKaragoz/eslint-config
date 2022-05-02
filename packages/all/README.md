### Install:

- NPM: `npm i -D eslint-config-berkekaragoz`
- Yarn: `yarn add -D eslint-config-berkekaragoz`
- PNPM: `pnpm i -D eslint-config-berkekaragoz`

# eslint-config-berkekaragoz

ESLint configuration aimed to have balanced aspects. Would love to hear [your feedback](https://github.com/BerkeKaragoz/eslint-config/issues/new?assignees=&labels=feedback&template=feedback.md&title=).

_Wait for version 1._

## Usage

For all:

```yaml
extends:
  - berkekaragoz
```

For React and Typescript:

```yaml
extends:
  - berkekaragoz/react-typescript
```

For React and JavaScript:

```yaml
extends:
  - berkekaragoz/react
```

Prettier config, `package.json`:

```json
  "prettier": "eslint-config-berkekaragoz-formatting/prettier"
```

### VSCode Settings

If you are facing with conficts, you should add these to `/.vscode/settings.json`.

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.format.enable": true,
  "editor.formatOnSave": true,
  "indentRainbow.ignoreErrorLanguages": ["*"],
  "indentRainbow.colorOnWhiteSpaceOnly": true
}
```

## Contents:

ESLint configs:

- `berkekaragoz`
- `berkekaragoz/formatting`
- `berkekaragoz/suggestions`
- `berkekaragoz/typescript`
- `berkekaragoz/react`
- `berkekaragoz/react-typescript`

All (`berkekaragoz`):

```js
{
  extends: [
    "eslint:recommended",
    "berkekaragoz-react",
    "berkekaragoz-typescript",
    "berkekaragoz-suggestions",
    "berkekaragoz-react/formatting",
    "berkekaragoz-formatting",
  ],
  rules: {
    "no-constant-condition": "warn",
  },
};
```

### Related

- [eslint:recommended](https://github.com/eslint/eslint/blob/main/conf/eslint-recommended.js)
- [eslint-config-berkekaragoz-suggestions](https://www.npmjs.com/package/eslint-config-berkekaragoz-suggestions)
- [eslint-config-berkekaragoz-formatting](https://www.npmjs.com/package/eslint-config-berkekaragoz-formatting)
- [eslint-config-berkekaragoz-react](https://www.npmjs.com/package/eslint-config-berkekaragoz-react)
