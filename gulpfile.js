'use strict';

var
  gulp   = require('gulp'),
  gutil  = require('gulp-util'),
  wrench = require('wrench');

var options = {
  src:          'app',
  dist:         'dist',
  tmp:          '.tmp',
  e2e:          'e2e',
  errorHandler: function(title) {
    return function(err) {
      gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
      this.emit('end');
    };
  }
};

wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file)(options);
});

// gulp.task('default', ['main']);
