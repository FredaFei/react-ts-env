const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {resolve} = require('./utils')
const utils = require('./utils');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  context: path.resolve(__dirname,'../'),
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      styles: resolve( '../src/styles')
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
        use: [ 'style-loader','css-loader',
          {
            loader: 'less-loader',
            options: {
              includePaths: [resolve('../src/styles')]
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
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: utils.assetsPath('images/[name].[hash:7].[ext]'),
        },
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};