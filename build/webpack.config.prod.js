const path = require('path');
const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packagejson = require('./package.json');

module.exports = Object.assign({}, base, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/js/[name].js'
  }
});