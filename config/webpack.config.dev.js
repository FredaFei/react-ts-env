const path = require('path')
const base = require('./webpack.config');

module.exports = Object.assign({}, base, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 3030,
    historyApiFallback: true,
    overlay: {
      //当出现编译器错误或警告时，就在网页上显示一层黑色的背景层和错误信息
      errors: true
    },
    inline: true,
    hot: true,
    proxy: {}
  }
})