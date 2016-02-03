require('es6-promise').polyfill();
'use strict';
 
var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

var jshint = require('gulp-jshint');

var paths = {
	scripts: ['./app/scripts/*.js', './app/scripts/*/*.js', './test/models/*.js'],
	styles: '.app/sass/*.scss'
};
 
gulp.task('sass', function () {
	gulp.src(paths.styles)
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./public/styles/'));
});

gulp.task('lint', function() {
	gulp.src(paths.scripts)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('default', function() {
	gulp.run('sass');
	gulp.run('lint');
	gulp.watch(paths.styles, ['sass']);
	gulp.watch(paths.scripts, ['lint']);
}); 