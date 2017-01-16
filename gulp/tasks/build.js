var gulp = require('gulp');

gulp.task('build', ['html', 'fonts', 'styles', 'browserify', 'images']);

gulp.task('build:prod', ['html', 'fonts', 'uglify', 'minify:css', 'images', "rev:assets"], function() {
    console.log("Build Successful");
    process.exit(0);
});
