// Override rules for files that are only used during development or build.
// This includes tests, configuration files, tooling and scripts.
module.exports = {
  files: [
    "**/tests/**/*.js",
    "**/tests/**/*.jsx",
    "**/tests/**/*.ts",
    "**/tests/**/*.tsx",
    "**/*.test.ts",
    "**/*.test.tsx",
    "./*.js",
    "./tests/config/**/*.js",
  ],
  rules: {
    // Allow import of dev dependencies or private modules.
    "node/no-unpublished-import": 0,
    "node/no-unpublished-require": 0,

    // Don't require export.
    "import/no-unused-modules": 0,

    // Import plugin not properly detecting modules.
    "import/unambiguous": 0,

    // Allow import of dev dependencies.
    "import/no-extraneous-dependencies": 0,

    // Allow use of process.env.
    "node/no-process-env": 0,

    // Disable putout rules (https://github.com/coderaiser/putout)
    "putout/putout": [
      "error",
      {
        rules: {
          "strict-mode/add": "off",
        },
      },
    ],
  },
};
