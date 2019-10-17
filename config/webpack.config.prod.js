const path = require('path');
const { assetsPath } = require('./utils');
const { build } = require('./config');
const base = require('./webpack.config');
const prodMode = process.env.NODE_ENV === 'production';

module.exports = Object.assign({}, base, {
  mode: 'production',
  output: {
    path: build.assetsRoot,
    filename: assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: assetsPath('js/[id].[chunkhash].js'),
    publicPath: build.assetsPublicPath
  },
  // optimization: {
  //   minimize: prodMode,
  //   splitChunks: {
  //     chunks: 'all',
  //     name: false,
  //   },
  //   runtimeChunk: true
  // }
});