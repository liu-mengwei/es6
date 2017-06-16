/**
 * Created by liumw on 2017/6/12.
 */
import gulp from 'gulp';
import gulpif from 'gulp-if'; //gulp的语句中作if判断
import concat from 'gulp-concat'; //gulp中处理文件拼接
import webpack from 'webpack'; //打包
import gulpWebpack from 'webpack-stream' //gulp是文件流处理
import named from 'vinyl-named';//文件重命名标志
import livereload from 'gulp-livereload'; //文件热更新
import plumber from 'gulp-plumber'; //文件信息流
import rename from 'gulp-rename'; // 文件重命名
import uglify from 'gulp-uglify'; // css,js文件压缩
import {log,colors} from 'gulp-util'; //命令行工具输出的包
import args from './util/arg'; //命令行参数配置

gulp.task('scripts', () => {
    return gulp.src(['app/js/index.js'])
        .pipe(plumber({
            errorHandler: function () {

            }
        }))
        .pipe(named())
        .pipe(gulpWebpack({
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel'
                }]
            }
        }), null, (err, status) => {
            log(`Finished ${colors.cyan('scripts')}`, status.toString({
                chunks: false
            }))
        })
        .pipe(gulp.dest('server/public/js'))
        .pipe(rename({
            basename: 'cp',
            extname: '.min.js'
        }))
        .pipe(uglify({compress: {properties: false}, output: {'quote_keys': true}}))
        .pipe(gulp.dest('server/public/js'))
        .pipe(gulpif(args.watch, livereload())); //啥意思livereload

});

