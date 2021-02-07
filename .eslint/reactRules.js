// Node.js version. It should match .nvmrc. Vercel is using latest 14.x.
const nodeVersion = ">=14.15.4";

module.exports = {
  // Restrict JSX to these file extensions.
  "react/jsx-filename-extension": [
    "error",
    { extensions: [".js", ".jsx", ".ts", ".tsx"] },
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

  // Turn off rule that is no longer relevant, especially in current browsers.
  // See https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/398
  "jsx-a11y/no-onchange": 0,
};
