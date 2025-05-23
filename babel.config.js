module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      ["@babel/plugin-transform-flow-strip-types"],
      ["@babel/plugin-proposal-private-methods", { "loose": true }]
    ],
  };
};
