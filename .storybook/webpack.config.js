const path = require("path");
module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: [/\.js$/],
    loader: require.resolve(
      "@open-wc/webpack/loaders/import-meta-url-loader.js"
    )
  });
  // defaultConfig.resolve.alias = {
  //   ...defaultConfig.resolve.alias,
  //   '@amyscript/dsg-image/dsg-image.js': path.resolve(__dirname, '../node_modules/@amyscript/dsg-image/dsg-image.js'),
  //   '@amyscript/dsg-heading/dsg-heading.js': path.resolve(__dirname, '../node_modules/@amyscript/dsg-heading/dsg-heading.js'),
  //   '@amyscript/dsg-text/dsg-text.js': path.resolve(__dirname, '../node_modules/@amyscript/dsg-text/dsg-text.js'),
  //   '@amyscript/dsg-card/dsg-card.js': path.resolve(__dirname, '../node_modules/@amyscript/dsg-card/dsg-card.js'),
  // }
  return defaultConfig;
};
