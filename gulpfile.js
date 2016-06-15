var gulp = require('gulp');
var htmlone = require('gulp-htmlone');

gulp.task('htmlone', function () {
    gulp.src('./dist/*.html')
    .pipe(htmlone({
        cssminify: true,
        jsminify: true
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['htmlone']);
