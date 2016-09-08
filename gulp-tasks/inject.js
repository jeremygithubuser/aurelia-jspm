var gulp = require('gulp'),
inject = require('gulp-inject-string');

gulp.task('inject', function(){
    gulp.src('./index.html')
        .pipe(inject.replace('config-dev.js', 'config.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('inject:dev', function(){
    gulp.src('./index.html')
        .pipe(inject.replace('config.js', 'config-dev.js'))
        .pipe(gulp.dest('./'));
});