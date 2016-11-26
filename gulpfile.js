var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('compress', function (cb) {
    pump([
    	gulp.src(['www/js/**/*.js', '!www/js/**/*.min.js',
    		'!www/js/bootstrap.js']),
    	concat('concat.js'),
    	gulp.dest('dist/js'),
    	rename('main.min.js'),
    	uglify(),
    	gulp.dest('dist/js')
    	],
    	cb
    );
});