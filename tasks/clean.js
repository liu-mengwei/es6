/**
 * Created by liumw on 2017/6/13.
 */
import gulp from 'gulp';
import del from 'del';

gulp.task('clean', function () {
    return del(['server/public', 'server/views']);
});