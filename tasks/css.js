/**
 * Created by liumw on 2017/6/13.
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/arg';

//文件的复制操作
gulp.task('css', ()=> {
    //热更新
    return gulp.src('app/**/*.css')
        .pipe(gulp.dest('server/public)'))
        .pipe(gulpif(args.watch, livereload()));
});