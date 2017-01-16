var gulp = require('gulp');
var watch = require('gulp-watch');

var vars = require('../config').vars;
var config = require('../config').watch;

gulp.task('watch', function() {
    gulp.watch(config.html.src, config.html.tasks);
    gulp.watch(config.styles.src, config.styles.tasks);
    
    watch(config.scripts.src, function() {
        vars.error = null;
        gulp.start(config.scripts.tasks);
    });
});

