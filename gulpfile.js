require('es6-promise').polyfill();
'use strict';
 
 //gulpy things
var gulp = require('gulp');
var rename = require('gulp-rename');

//browserify-y things
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var babel = require('babelify');

//browsersync things
var browserSync = require('browser-sync').create();

//css-y things
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

//javascripty things
var jshint = require('gulp-jshint');

//test-y things
var mochaPhantomjs = require('gulp-mocha-phantomjs');

var paths = {
	scripts_app: './app/**/*.js',
	scripts_test: './test/**/*.js',
	styles: './app/sass/**/*.scss'
};
 
//get sassy
gulp.task('sass', function () {
	gulp.src('./app/sass/core.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./public/styles/'));
});

//browsersync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: "./"
    });
});

//browserify tasks
gulp.task('browserify-app', ['lint-app'], function() {
  return gulp.src('./app/scripts/index.js')
    .pipe(browserify({
      insertGlobals: true
    }))
    .pipe(rename('build.js'))
    .pipe(gulp.dest('build'))
    .pipe(gulp.dest('public/scripts'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('browserify-test', ['lint-test'], function() {
  return gulp.src('./test/index.js')
    .pipe(browserify({
      insertGlobals: true
    }))
    .pipe(rename('app-test.js'))
    .pipe(gulp.dest('build'));
});


//test-y things
gulp.task('lint-app', function() {
	gulp.src('paths.scripts_app')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('lint-test', function() {
	gulp.src('paths.scripts_test')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});


//default gulpy things
gulp.task('watch', function() {
  gulp.watch([paths.scripts_app, paths.styles], ['build']);
  gulp.watch(paths.scripts_test, ['test']);
});

gulp.task('build', ['browser-sync', 'sass', 'browserify-app']);

gulp.task('test', ['lint-test', 'browserify-test'], function() {
  return gulp.src('test/index.html')
    .pipe(mochaPhantomjs());
});

gulp.task('default', ['test', 'build', 'watch']);