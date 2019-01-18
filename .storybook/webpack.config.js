const path = require("path");
module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules = [
    {
      test: [/\.js$/],
      loader: "babel-loader",
      options: {
        cacheDirectory: false
      }
    }
  ];

  return defaultConfig;
};
