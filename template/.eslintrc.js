module.exports = {
  root: true,
  extends: ["@react-native-community", "plugin:import/recommended", "plugin:import/typescript"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-shadow": ["error"],
        "no-shadow": "off",
        "no-undef": "off"
      }
    }
  ],
  rules: {
    "comma-dangle": [1, "never"],
    quotes: [1, "double", "avoid-escape"],
    "import/no-unresolved": [2, { caseSensitive: true }]
  },
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
      "babel-module": { allowExistingDirectories: true }
    }
  }
};
