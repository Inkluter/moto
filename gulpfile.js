var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var shell = require('gulp-shell');

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('sass:watch', function () {
  watch('./scss/**/*.scss', function(event, cb) {
        gulp.start('sass');
    });
});

gulp.task('express', shell.task([
  'node bmw.js'
]));

gulp.task('default', ['express', 'sass', 'sass:watch']);
