const path = require("path");
// const webpack = require("webpack");
// new webpack.IgnorePlugin({
//   resourceRegExp: /^\.\/elements$/,
// });
module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.resolve.alias = {
    "@amyscript/dsg-image/dsg-image.js": "../dsg-image/dsg-image.js"
  };
  defaultConfig.module.rules = [
    {
      test: [/\.js$/],
      loader: "babel-loader",
      exclude: /elements\/dsg-info-card\/node_modules\/(?!(@webcomponents\/shadycss|lit-html|@polymer|@vaadin|@lit)\/).*/,
      options: {
        cacheDirectory: false
      }
    }
  ];

  return defaultConfig;
};
