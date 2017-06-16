/**
 * Created by liumw on 2017/6/13.
 */
import gulp from 'gulp';
import args from './util/arg';

gulp.task('browser', function (cb) {
    //啥意思
    if (!args.watch) return cb();

    gulp.watch('app/**/*.css', ['css']);
    gulp.watch('app/**/*.js', ['scripts']);
    gulp.watch('app/**/*.ejs', ['pages']);
});