var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer'),
    embedlr = require("gulp-embedlr"),
    connect = require('gulp-connect');

gulp.task('html', function(){
    gulp.src('app/*.html')
    .pipe(embedlr())
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload());
})

gulp.task('sass', function(){
    gulp.src('app/scss/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});

gulp.task('scripts', function(){
    gulp.src('app/js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
});

gulp.task('image', function(){
    gulp.src('app/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
});

gulp.task('connect', function() {
  connect.server({
      root: 'dist',
    livereload: true
  });
});

gulp.task('watch', function(){
    gulp.watch('app/js/*.js', ['scripts']);
    gulp.watch('app/scss/*.scss', ['sass'])
    gulp.watch('app/*.html', ['html'])
})

gulp.task('default',['html','sass', 'scripts', 'image', 'connect', 'watch']);