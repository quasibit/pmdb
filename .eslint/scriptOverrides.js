const developmentRules = require("./developmentOverrides");

// Override rules for build and development scripts.
module.exports = {
  files: ["scripts/**/*.js"],
  parserOptions: {
    sourceType: "script",
  },
  rules: {
    ...developmentRules.rules,

    // Allow writing to the console in for logging purposes.
    "no-console": 0,
  },
};
