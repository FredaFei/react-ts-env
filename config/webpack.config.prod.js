const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { resolve,assetsPath } = require('./utils');
const { build } = require('./config');
const base = require('./webpack.config');

module.exports = Object.assign({}, base, {
  mode: 'production',
  output: {
    path: build.assetsRoot,
    filename: assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('../index.html')
    }),
    new MiniCssExtractPlugin({
      filename: assetsPath(`${build.assetsSubDirectory}/css/[name].[contenthash].css`),
      chunkFilename: assetsPath(`${build.assetsSubDirectory}/css/[name].[contenthash].css`)
    })
  ]
});