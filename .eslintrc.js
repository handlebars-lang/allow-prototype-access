module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: ["compat", "prettier"],
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {},
  overrides: [
    {
      files: ["test/**/*.{js,ts}"],
      plugins: ["jest"],
      env: {
        "jest/globals": true
      }
    },
    {
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: ["plugin:@typescript-eslint/recommended"]
    }
  ]
};
