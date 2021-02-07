module.exports = {
  // Turn off no-missing-import rule from eslint-plugin-node, because it
  // doesn't recognize TypeScript path aliases.
  // See https://github.com/mysticatea/eslint-plugin-node/issues/233
  // See https://github.com/mysticatea/eslint-plugin-node/issues/217
  "node/no-missing-import": 0,

  // Enforce the absence of these extensions in import declarations.
  "import/extensions": [
    "error",
    {
      js: "never",
      jsx: "never",
      ts: "never",
      tsx: "never",
    },
  ],
  "node/file-extension-in-import": [
    "error",
    "always",
    {
      ".js": "never",
      ".jsx": "never",
      ".ts": "never",
      ".tsx": "never",
    },
  ],

  // Allow unassigned import of stylesheets.
  "import/no-unassigned-import": [
    "error",
    {
      allow: ["**/*.css", "**/*.scss"],
    },
  ],

  // 1) Require exports.
  // 2) Except for routes that will be consumed by Next.js.
  // Modified from: https://github.com/EvgenyOrekhov/eslint-config-hardcore/blob/d94b018977f469fb732f8037eb49240ba1900d5f/base.json#L335
  "import/no-unused-modules": [
    "error",
    {
      missingExports: true,
      unusedExports: true,
      ignoreExports: ["**/pages/**"],
    },
  ],
};
