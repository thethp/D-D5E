require('es6-promise').polyfill();
'use strict';
 
var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./public/styles/'));
});

gulp.task('default', function() {
  gulp.run('sass');
  gulp.watch('./sass/**/*.scss', ['sass']);
}); 