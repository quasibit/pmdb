const settings = require("./.eslint/settings");
const generalRules = require("./.eslint/generalRules");
const developmentRules = require("./.eslint/developmentRules");
const scriptRules = require("./.eslint/scriptRules");
const dataRules = require("./.eslint/dataRules");

module.exports = {
  extends: [
    // hardcore already includes a bunch of other plugins (import, prettier, etc.).
    // See https://github.com/EvgenyOrekhov/eslint-config-hardcore
    "hardcore",
    "hardcore/node",
    "hardcore/ts-for-js",
    "plugin:import/typescript",
    "plugin:react/all",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/strict",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true,
  },
  settings,
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: generalRules,
  overrides: [developmentRules, scriptRules, dataRules],
};
