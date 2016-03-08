const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const plumber = require('gulp-plumber');
const nodemon = require('gulp-nodemon');

gulp.task('babel', () =>
    watch('babel/**/*.js', function() {
        gulp.src('babel/**/*.js')
            .pipe(plumber({
                errorHandler: function(err) {
                    console.log(err);
                    this.emit('end');
                }
            }))
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(gulp.dest(''))
    })
);

gulp.task('default', ['nodemon'], () => {

});
gulp.task('nodemon', function(cb) {

    var started = false;

    return nodemon({
        script: 'app.js'
    }).on('start', function() {
        // to avoid nodemon being started multiple times
        // thanks @matthisk
        if (!started) {
            cb();
            started = true;
            gulp.run('babel')
        }
    });
});

// var gulp        = require('gulp');
// var browserSync = require('browser-sync').create();

// // process JS files and return the stream.
// gulp.task('js', function () {
//     return gulp.src('js/*js')
//         .pipe(browserify())
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });

// // create a task that ensures the `js` task is complete before
// // reloading browsers
// gulp.task('js-watch', ['js'], browserSync.reload);

// // use default task to launch Browsersync and watch JS files
// gulp.task('serve', ['js'], function () {

//     // Serve files from the root of this project
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });

//     // add browserSync.reload to the tasks array to make
//     // all browsers reload after tasks are complete.
//     gulp.watch("js/*.js", ['js-watch']);
// });