var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

// we should run tasks one by one
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

// the next one:
// add to dist other files
gulp.task('get:notmins:notjs', function (cb) {
    pump([
        gulp.src(['!www/**/*.min.*', '!www/**/*.js', 'www/**/*.*']),
        gulp.dest('dist'),
        ],
        cb
    );
});

// and run this:
// add to dist only min files
gulp.task('get:mins', function (cb) {
    pump([
        gulp.src(['www/**/*.min.*']),
        gulp.dest('dist'),
        ],
        cb
    );
});