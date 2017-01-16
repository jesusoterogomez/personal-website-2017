var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var config = require('../config').browserify;
var assign = require('object-assign');
var vars = require('../config').vars;

var bundler = watchify(browserify(config.src, assign(watchify.args, config.settings)));


function logError(e) {
    if (e.message !== vars.buildError) {
        console.log(e.message);
        console.log(e.codeFrame);
    }

    vars.buildError = e.message;
    this.emit('end');
}

watchify.args.debug = config.debug;
config.settings.transform.forEach(function(t) {
    bundler.transform(t);
});

function bundle() {
    return bundler.bundle()
    .on('error', logError)
    .pipe(source(config.outputName))
    .pipe(gulp.dest(config.dest));
}

gulp.task('browserify', bundle);

bundler.on('update', bundle);

