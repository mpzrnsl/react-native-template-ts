module.exports = {
  arrowParens: "avoid",
  bracketSameLine: true,
  bracketSpacing: true,
  singleQuote: false,
  trailingComma: "none",
  printWidth: 100,
  importOrder: ["^\\u0000", "^(react$)|^(react-native$)", "<THIRD_PARTY_MODULES>", "^[./]"],
  importOrderBuiltinModulesToTop: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
};
