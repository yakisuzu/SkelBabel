var gulp = require('gulp');
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');

var src = './src/**/*.js';

gulp.task('babel', function(){
  return gulp.src(src)
    .pipe(babel())
    .pipe(gulp.dest('./dest/'));
});

gulp.task('eslint', function(){
  return gulp.src(src)
    .pipe(eslint({useEslintrc: true}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('watch', function(){
  gulp.watch([src], ['babel']);
});

gulp.task('default', ['babel']);
