// Override rules for data files.
module.exports = {
  files: ["data/**/*.js"],
  rules: {
    // Allow use of process.env.
    "node/no-process-env": 0,

    // Doesn't properly detect unused modules.
    "import/no-unused-modules": 0,

    // Import plugin not properly detecting modules.
    "import/unambiguous": 0,

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
