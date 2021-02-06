// Override rules for test files.
module.exports = {
  files: ["?(*.)+(spec|test).[jt]s?(x)"],
  extends: ["@wemake-services/jest"],
  rules: {
    // Disable rule that no longer exists.
    "jest/no-test-callback": 0,
  },
};
