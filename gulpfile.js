var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('compress:js', function (cb) {
    pump([
    	gulp.src(['www/js/**/*.js', '!www/js/**/*.min.js']),
    	concat('concat.js'),
    	gulp.dest('dist/js'),
    	rename('main.min.js'),
    	uglify(),
    	gulp.dest('dist/js')
    	],
    	cb
    );
});

//get everything including min files(js inclusively), images, styles and index
gulp.task('get:notmins:notjs', function (cb) {
    pump([
        gulp.src(['!www/**/*.min.*', '!www/**/*.js', 'www/**/*.*']),
        gulp.dest('dist'),
        ],
        cb
    );
});

gulp.task('get:mins', function (cb) {
    pump([
        gulp.src(['www/**/*.min.*']),
        gulp.dest('dist'),
        ],
        cb
    );
});