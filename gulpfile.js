// 'use strict';
//
// var
//   gulp   = require('gulp'),
//   gutil  = require('gulp-util'),
//   wrench = require('wrench');
//
// var options = {
//   dist:         'dist',
//   errorHandler: function(title) {
//     return function(err) {
//       gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
//       this.emit('end');
//     };
//   }
// };
//
// wrench.readdirSyncRecursive('./gulp').filter(function(file) {
//   return (/\.(js|coffee)$/i).test(file);
// }).map(function(file) {
//   require('./gulp/' + file)(options);
// });
//
// // gulp.task('default', ['main']);
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
