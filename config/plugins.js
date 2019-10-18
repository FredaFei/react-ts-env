const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const {CheckerPlugin} = require('awesome-typescript-loader')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const webpack = require('webpack');
const { resolve, assetsPath } = require('./utils');
const path = require('path');


const basePlugins = [
  new CheckerPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    favicon: './favicon.ico',
    title: 'react-typescript',
    template: resolve('../index.html')
  })
];
const devPlugins = [
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
  }),
];
const prodPlugins = [
  new CleanWebpackPlugin({
    verbose: true,
    cleanOnceBeforeBuildPatterns:[
      '!react.dll.js',
      '!react-manifest.json'
    ]
  }),
  new webpack.DllReferencePlugin({
    context: path.join(__dirname),
    manifest: require('../dll/react.manifest.json')
  }),
  new AddAssetHtmlPlugin({
    filepath: path.resolve(__dirname, '../dll/*.dll.js'),
    includeSourcemap: false
  }),
  new BundleAnalyzerPlugin(),
  new MiniCssExtractPlugin({
    filename: assetsPath('css/[name].[contenthash].css'),
    chunkFilename: assetsPath('css/[id].[contenthash].css'),
  })
];

const envMap = {
  development: devPlugins,
  production: prodPlugins
};
module.exports = basePlugins.concat(envMap[process.env.NODE_ENV]);