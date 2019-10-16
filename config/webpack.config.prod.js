// const path = require('path');
const { assetsPath } = require('./utils');
const { build } = require('./config');
const base = require('./webpack.config');

module.exports = Object.assign({}, base, {
  mode: 'production',
  output: {
    path: build.assetsRoot,
    filename: assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: assetsPath('js/[id].[chunkhash].js'),
    publicPath: build.assetsPublicPath
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        },
      }
    },
    runtimeChunk: true
  }
});