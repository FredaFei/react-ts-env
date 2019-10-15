const path = require('path')
const {build,dev} = require('./config')

exports.resolve = function (dir) {
  return path.join(__dirname, dir)
}

exports.resolveAssetsRootDir = function (dir) {
  return path.join(dir)
}

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? build.assetsSubDirectory
    : dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}