require('es6-promise').polyfill();
'use strict';
 
var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

var jshint = require('gulp-jshint');

var rename = require('gulp-rename');
var browserify = require('gulp-browserify');
var mochaPhantomjs = require('gulp-mocha-phantomjs');

var paths = {
	scripts: ['./app/scripts/*.js', './app/scripts/*/*.js', './test/*.js', './test/*/*.js'],
	appScript: './app/scripts/main.js',
	appScriptDest: './build/scripts/',
	styles: '.app/sass/*.scss',
	stylesDest: './public/styles/'
};
 
gulp.task('sass', function () {
	return gulp.src(paths.styles)
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest(paths.stylesDest));
});

gulp.task('lint', function() {
	return gulp.src(paths.scripts)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('browserify-client', function() {
	return gulp.src(paths.appScript)
		.pipe(browserify({ insertGlobals: true }))
		.pipe(rename('build.js'))
		.pipe(gulp.dest(paths.appScriptDest));
});

gulp.task('default', function() {
	gulp.start(['sass','browserify-client']);
	gulp.watch(paths.styles, ['sass']);
	gulp.watch(paths.appScript, ['browserify-client']);
}); 