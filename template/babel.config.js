module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src/"],
        alias: {
          "@core": "./src/core",
          tests: "./tests"
        }
      }
    ],
    "react-native-reanimated/plugin"
  ]
};
