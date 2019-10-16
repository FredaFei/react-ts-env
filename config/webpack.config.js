const path = require('path');
const utils = require('./utils');
const plugins = require('./plugins');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      styles: utils.resolve('../src/styles')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          devMode
            ? 'style-loader'
            : {
              loader: MiniCssExtractPlugin.loader,
              options: {}
            },
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              includePaths: [utils.resolve('../src/styles')]
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //1024 == 5kb
              limit: 10240,
              name: utils.assetsPath('images/[name].[hash:7].[ext]')
            }
          }]
      }
    ]
  },
  plugins: [...plugins],
  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'loaders')
    ]
  }
};