/*
*
*   @Author: Anwaar Ulhaq
*   @Date: 4/3/2017
*
* */

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var css = require('gulp-css');
var inject = require('gulp-inject');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var htmlreplace = require('gulp-html-replace');

//  App Path
var appPath = './';

//  Build Path
var buildPath = './build/';

//  Output JS
var outputScriptsJs = 'scripts.min.js';
var outputLibsJs = 'libs.min.js';

//  Output CSS
var outputCss = 'styles.min.css';

//  Folders/Files TO Move
var filesToMove = [
    './assets/**/*.*'
];

gulp.task('clean', function () {
    return gulp.src(buildPath, {read: false})
        .pipe(clean());
});

gulp.task('move', ['clean'], function(){
    return gulp.src(filesToMove, { base: '' })
        .pipe(gulp.dest(buildPath+'assets/'));
});

gulp.task('sass', ['move'], function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('css', ['sass'], function () {
   return gulp.src([
       './node_modules/bootstrap/dist/css/bootstrap.css',
       './css/**/*.css'
   ])
       .pipe(concat(outputCss))
       .pipe(css())
       .pipe(gulp.dest(buildPath));
});

gulp.task('js', ['css'], function () {
   return gulp.src([
       './node_modules/jquery/dist/jquery.js',
           './node_modules/angular/angular.js',
           './node_modules/angular-route/angular-route.js',
           './node_modules/angular-animate/angular-animate.js',
           './node_modules/angular-touch/angular-touch.js',
           './node_modules/angular-sanitize/angular-sanitize.js',
           './node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js'
       ])
        .pipe(concat(outputLibsJs))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest(buildPath)) &&
    gulp.src([
        './js/appConfig.js',
        './js/app.js',
        './js/services/*.js',
        './js/controllers/*.js',
        './js/directives/*.js',
        './js/components/*.js'
    ])
        .pipe(concat(outputScriptsJs))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest(buildPath));
});

gulp.task('index', ['js'], function () {
    return gulp.src('index.html')
        .pipe(htmlreplace({
            'css': outputCss,
            'js': [outputLibsJs, outputScriptsJs]
        }))
        .pipe(gulp.dest(buildPath));
});

gulp.task('default', ['clean', 'move', 'sass', 'css', 'js', 'index']);

/*gulp.task('sass:watch', function () {
    gulp.watch(appPath+'sass/**//*.scss', ['sass']);
});*/

