'use strict';

var plugins = {
  rm: require('rimraf')
}

module.exports = function (gulp, param) {
  gulp.task('clean', function(callback) {
    plugins.rm(param.clean, callback)
  })
}
