var gulp = require('gulp');
var htmlone = require('gulp-htmlone');
var a = b == 1 ? 2 : 0;
gulp.task('htmlone', function () {
    gulp.src('./dist/*.html')
    .pipe(htmlone({
        cssminify: true,
        jsminify: true
    }))
    .pipe(gulp.dest('./dist'));
});
var a = 1 == 1 ?  0 : 2

gulp.task('min', function () {

});

gulp.task('default', ['htmlone']);
