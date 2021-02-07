// Node.js version. It should match .nvmrc. Vercel is using latest 14.x.
const nodeVersion = ">=14.15.4";

module.exports = {
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
};
