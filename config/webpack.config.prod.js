const path = require('path');
const { assetsPath } = require('./utils');
const { build } = require('./config');
const base = require('./webpack.config');
// const prodMode = process.env.NODE_ENV === 'production';

const commonOptions = {
  chunks: 'all',
  reuseExistingChunk: true
};

module.exports = Object.assign({}, base, {
  mode: 'production',
  output: {
    path: build.assetsRoot,
    filename: assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: assetsPath('js/[id].[chunkhash].js'),
    publicPath: build.assetsPublicPath
  },
  optimization: {
    namedChunks: true,
    moduleIds: 'hashed',
    runtimeChunk: { name: 'manifest' },
    splitChunks: {
      maxInitialRequests: 5,
      cacheGroups: {
        commons: {
          name: 'commons',
          minChunks: 2,
          ...commonOptions
        },
        dll: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'dll',
          priority: 1,
          ...commonOptions
        }
      }
    }
  }
});