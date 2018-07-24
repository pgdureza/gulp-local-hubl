const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const uglifycss = require('gulp-uglifycss');
const browserify = require('browserify');
const through2 = require('through2');
const uglify = require('gulp-uglify');
const flatten = require('gulp-flatten');
const babel = require('babelify');
const clean = require('gulp-clean');
const autoprefixer = require('autoprefixer');

const scss = {
  input: "./_preprocessed/**/styles/**/*.scss",
  output: "./custom/page/"
}

const js = {
  input: "./_preprocessed/**/js/*.js",
  watch: "./_preprocessed/**/js/**/*.js",
  output: "./custom/page/"
}

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

// JS TASKS
gulp.task('js', ['clean-js'], function () {
  gulp.src(js.input)
    .pipe(through2.obj(function (file, enc, next){
      browserify(file.path)
        .transform(babel)
        .bundle(function(err, res){
          file.contents = res;
          next(null, file);
        });
    }))
    .pipe(uglify())
    .pipe(flatten({ includeParents: 1 }))
    .pipe(gulp.dest(js.output))
});

gulp.task('watch-js', function() {
  return gulp
    .watch(js.watch, ['js'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    })
});

gulp.task('clean-js', function () {
  return gulp.src(js.output  + "/**/*.js", {read: false})
    .pipe(clean());
});

// CSS TASKS

gulp.task('sass', ['clean-css'], function () {
  return gulp
    .src(scss.input, { nodir: true })
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(flatten({ includeParents: 1 }))
    .pipe(gulp.dest(scss.output));
});

gulp.task('watch-css', function() {
  return gulp
    .watch(scss.input, ['sass'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    })
});

gulp.task('clean-css', function () {
  return gulp.src(scss.output + "/**/*.css", {read: false})
    .pipe(clean());
});

gulp.task('default', ['sass', 'js', 'watch-css', 'watch-js']);