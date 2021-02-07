module.exports = {
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
