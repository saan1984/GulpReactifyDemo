var gulp = require('gulp'),
    browserify = require('gulp-browserify');
gulp.task('reactify', function() {
    gulp.src('dev/my-script.js')
        .pipe(browserify({transform: 'reactify'}))
        .pipe(gulp.dest('dist/'));
});
gulp.task('default',['reactify']);
gulp.task('watch', function() {
    gulp.watch('dev/*.js', ['default']);
});