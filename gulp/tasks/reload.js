var gulp = require('gulp');
var config = require('../config').watch;
var sync = require('browser-sync');

gulp.task('reload', ['build'], function() {
    sync.reload();
});

gulp.task('reload:styles', ['styles'], function() {
    // Don't refresh to live update styles
});

gulp.task('reload:html', ['html'], function() {
    sync.reload();
});

gulp.task('reload:scripts', ['browserify'], function() {
    sync.reload();
});
