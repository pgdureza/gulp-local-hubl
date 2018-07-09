const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const uglifycss = require('gulp-uglifycss');
const browserify = require('browserify');
const through2 = require('through2');
const uglify = require('gulp-uglify');

const output_path = "./work/hubthemes/vast/custom/page/"
const scss = {
  input: "./_pre-compiled/**/styles/*.scss",
  output: output_path
}

const js = {
  input: "./_pre-compiled/**/js/*.js",
  watch: "./_pre-compiled/**/js/**/*.js",
  output: output_path
}

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

// JS TASKS
gulp.task('js', function () {
  gulp.src(js.input)
    .pipe(through2.obj(function (file, enc, next){
      browserify(file.path)
        .bundle(function(err, res){
          file.contents = res;
          next(null, file);
        });
    }))
    .pipe(uglify())
    .pipe(gulp.dest(js.output))
});

gulp.task('watch-js', function() {
  return gulp
    .watch(js.watch, ['js'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    })
});

// CSS TASKS

gulp.task('sass', function () {
  return gulp
    .src(scss.input)
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest(scss.output));
});

gulp.task('watch-css', function() {
  return gulp
    .watch(scss.input, ['sass'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    })
});

gulp.task('default', ['sass', 'js', 'watch-css', 'watch-js']);