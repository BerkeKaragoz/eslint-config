module.exports = [
  require("@eslint/js").configs.recommended,
  ...require("eslint-config-berkekaragoz-react"),
  ...require("eslint-config-berkekaragoz-typescript"),
  require("eslint-config-berkekaragoz-suggestions"),
  require("eslint-config-berkekaragoz-react/formatting"),
  require("eslint-config-berkekaragoz-formatting"),
  {
    rules: {
      "no-constant-condition": "warn",
    },
  },
];
