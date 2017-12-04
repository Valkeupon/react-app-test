var gulp = require('gulp');
var path = require('path');
var $= require('gulp-load-plugins')({
    config: path.join(__dirname, 'package.json'),
    lazy: false
});
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('public/scss/app.scss')
    .pipe($.sass({
      outputStyle: 'compressed' // if css compressed **file size**
    })
    .on('error', $.sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['public/scss/**/*.scss'], ['sass']);
});
