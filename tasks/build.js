/**
 * Created by liumw on 2017/6/13.
 */
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('build', gulpSequence('clean', 'css', 'scripts', 'pages', ['browser','server']));