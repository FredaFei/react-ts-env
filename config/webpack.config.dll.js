const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    react: ['react', 'react-dom']
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../dist/dll'),
    library: '_dll_[name]'
  },
  plugins: [
    new CleanWebpackPlugin(),
    //生成动态链接库的对应关系
    new webpack.DllPlugin({
      name: '_dll_[name]',
      path: path.resolve(__dirname, '../dist/dll/[name].manifest.json')
    })
  ]
};