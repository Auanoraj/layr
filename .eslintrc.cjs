module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:jest/recommended",
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
        jest: true,
      },
      files: [".eslintrc.{js,cjs}", "**/*.test.js"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "import", "jsx-a11y", "prettier"],
  ignorePatterns: ["**/*.test.js"],
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": 0,
    "no-unused-vars": "error",
    indent: ["error", 2],
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
