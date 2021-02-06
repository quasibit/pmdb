// Node.js version. It should match .nvmrc. Vercel is using latest 14.x.
const nodeVersion = ">=14.15.4";

module.exports = {
  // Restrict JSX to these file extensions.
  "react/jsx-filename-extension": [
    "error",
    { extensions: [".js", ".jsx", ".ts", ".tsx"] },
  ],

  // Turn off no-missing-import rule from eslint-plugin-node, because it
  // doesn't recognize TypeScript path aliases.
  // See https://github.com/mysticatea/eslint-plugin-node/issues/233
  // See https://github.com/mysticatea/eslint-plugin-node/issues/217
  "node/no-missing-import": 0,

  // Specify the Node version explicitly. Next.js provides support for ES features.
  "node/no-unsupported-features/es-syntax": [
    "error",
    { ignores: ["modules"], version: nodeVersion },
  ],
  "node/no-unsupported-features/node-builtins": [
    "error",
    {
      version: nodeVersion,
    },
  ],
  "node/no-unsupported-features/es-builtins": [
    "error",
    {
      version: nodeVersion,
    },
  ],

  // Don't require importing react module, since Next.js includes it for us.
  "react/react-in-jsx-scope": 0,

  // Treat Next.js Link component as anchors.
  "jsx-a11y/anchor-is-valid": [
    "error",
    {
      components: ["Link"],
      specialLink: ["hrefLeft", "hrefRight"],
      aspects: ["invalidHref", "preferButton"],
    },
  ],

  // Only require labels to have "htmlFor" attribute and allow children.
  "jsx-a11y/label-has-for": [
    2,
    {
      required: {
        every: ["id"],
      },
      allowChildren: true,
    },
  ],

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

  // Prevent abbreviations while allowing some exceptions.
  // Add Next.js specific exceptions here.
  // Modified from: https://github.com/EvgenyOrekhov/eslint-config-hardcore/blob/d94b018977f469fb732f8037eb49240ba1900d5f/base.json#L417
  "unicorn/prevent-abbreviations": [
    "error",
    {
      whitelist: {
        args: true,
        props: true,
        getStaticProps: true,
        getServerSideProps: true,
      },
      checkShorthandProperties: true,
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

  // Naming conventions.
  // Modifications from eslint-config-hardcore are commented.
  // Modified from: https://github.com/EvgenyOrekhov/eslint-config-hardcore/blob/master/ts-for-js.json#L125
  "@typescript-eslint/naming-convention": [
    "error",
    {
      selector: "default",
      format: ["strictCamelCase"],
      // Next.js exceptions.
      filter: {
        regex: "(Component)",
        match: false,
      },
    },
    {
      // Allow both camel and pascal case for variables to support styled components.
      selector: "variable",
      format: ["strictCamelCase", "StrictPascalCase"],
    },
    {
      selector: "typeLike",
      format: ["StrictPascalCase"],
    },
    {
      selector: ["variable", "parameter", "property", "accessor"],
      types: ["boolean"],
      format: ["PascalCase"],
      prefix: ["is", "should", "has", "can", "did", "will"],
    },
    {
      // Allow functions to use camel or pascal case.
      // Ideally we would require React function components to be in pascal case
      // and other functions to be in camel case, but since we can't distinguish
      // between them, we have to accept either naming for any function.
      selector: "function",
      format: ["strictCamelCase", "StrictPascalCase"],
    },
    {
      // Require enum members to start with uppercase.
      selector: "enumMember",
      format: ["PascalCase"],
    },
  ],

  // Turn off rule that is no longer relevant, especially in current browsers.
  // See https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/398
  "jsx-a11y/no-onchange": 0,

  // Forbid unused variables.
  // Modified from: https://github.com/EvgenyOrekhov/eslint-config-hardcore/blob/013495902d8644ceff871bbcc26c9cbd1d2213bc/ts-for-js.json#L46
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      vars: "all",
      args: "after-used",
      caughtErrors: "all",
      // Allow multiple ignored variables as long as they start with "ignore".
      caughtErrorsIgnorePattern: "^ignore",
      varsIgnorePattern: "^ignore",
      argsIgnorePattern: "^ignore",
    },
  ],
};
