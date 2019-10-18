const path = require('path');
const { assetsPath } = require('./utils');
const { build } = require('./config');
const base = require('./webpack.config');

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
        dll: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'dll',
          priority: 1,
          ...commonOptions
        },
        js: {
          test: /\.(ts|js)$/,
          name: 'commons',
          priority: 2,
          minChunks: 2,
          ...commonOptions
        },
        css: {
          test: /\.(css|less|sass|scss)$/,
          name: 'commons',
          chunks: 'all',
          priority: 2,
          minChunks: 2,
          ...commonOptions
        }
      }
    }
  }
})