// File extensions to try when extension is omitted in import statement.
const tryExtensions = [".js", ".jsx", ".ts", ".d.ts", ".tsx"];

module.exports = {
  react: {
    version: "detect",
  },
  node: {
    tryExtensions: tryExtensions,
  },
  "import/parsers": {
    "@typescript-eslint/parser": [".ts", ".tsx"],
  },
  "import/resolver": {
    node: {
      extensions: tryExtensions,
    },
    // Load tsconfig.json from root dir.
    typescript: {},
  },
};
