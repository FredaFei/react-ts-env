const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const webpack = require('webpack');
const { resolve, assetsPath } = require('./utils');
const { build } = require('./config');
const path = require('path');

const DLL_PATH = '../dist/dll';

const basePlugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: resolve('../index.html')
  })
];
const devPlugins = [
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
  })
];
const prodPlugins = [
  // new CleanWebpackPlugin(),
  new webpack.DllReferencePlugin({
    manifest: require('../dist/dll/react.manifest.json')
  }),
  new AddAssetHtmlPlugin({
    filepath: path.resolve(__dirname, `${DLL_PATH}/**/*.js`),
    includeSourcemap: false
  }),
  new BundleAnalyzerPlugin(),
  new MiniCssExtractPlugin({
    filename: assetsPath(`${build.assetsSubDirectory}/css/[name].[contenthash].css`),
    chunkFilename: assetsPath(`${build.assetsSubDirectory}/css/[id].[contenthash].css`)
  })
];

const envMap = {
  development: devPlugins,
  production: prodPlugins
};
module.exports = basePlugins.concat(envMap[process.env.NODE_ENV]);