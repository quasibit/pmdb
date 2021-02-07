const settings = require("./.eslint/settings");
const importRules = require("./.eslint/importRules");
const reactRules = require("./.eslint/reactRules");
const namingRules = require("./.eslint/namingRules");
const nodeRules = require("./.eslint/nodeRules");
const jsdocRules = require("./.eslint/jsdocRules");
const developmentOverrides = require("./.eslint/developmentOverrides");
const scriptOverrides = require("./.eslint/scriptOverrides");
const dataOverrides = require("./.eslint/dataOverrides");
const testOverrides = require("./.eslint/testOverrides");

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
    "plugin:jsdoc/recommended",
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
  rules: {
    ...importRules,
    ...reactRules,
    ...namingRules,
    ...nodeRules,
    ...jsdocRules,
  },
  overrides: [
    developmentOverrides,
    scriptOverrides,
    dataOverrides,
    testOverrides,
  ],
};
