const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: path.join(__dirname, '../src/index.tsx'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      styles: path.resolve(__dirname, '../src/styles')
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
              includePaths: [path.join(__dirname, '../src/styles')]
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
              name: '[path][name].[ext]'
            }
          }]
      },
      // {
      //   test: /\.(jpg|png|svg)$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: '[name].[hash].[ext]',
      //   },
      // },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};