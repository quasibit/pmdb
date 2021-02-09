const { pathsToModuleNameMapper } = require("ts-jest/utils");

const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  automock: false,
  setupFiles: ["./tests/config/setup.js"],
  setupFilesAfterEnv: ["./tests/config/setupAfterEnv.js"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],

  testPathIgnorePatterns: ["/.next/", "/node_modules/", "/coverage/"],

  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/tests/**",
    "!**/coverage/**",

    // Exclude root config files
    "!*.{js,ts}",

    // Exclude tooling folders
    "!.*/**",
  ],

  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "./node_modules/babel-jest",

    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "./tests/config/fileTransformer.js",
  },

  transformIgnorePatterns: [
    "./node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],

  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" }),
  },

  preset: "ts-jest",
  testEnvironment: "jsdom",

  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json",
    },
  },
};
