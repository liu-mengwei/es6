/**
 * Created by liumw on 2017/6/13.
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';//启动服务器用的
import args from './util/arg';

//这里cb是什么鬼
gulp.task('server', (cb)=> {
    if (!args.watch) return cb();

    //--harmony 在当前命令行下执行后面的脚本  express默认的服务器脚本
    var server = liveserver.new(['--harmony', 'server/bin/www']);
    server.start();

    //监听改变时，浏览器自动刷新 --这里干了个啥活呀
    gulp.watch(['server/public/**/*.js', 'server/**/*.ejs', 'server/**/*.css'], function (file) {
        server.notify.apply(server, [file]);
    });

    //接口相关的js 重启 第二个参数是 要执行什么任务
    gulp.watch(['server/routes/**/*.js', 'server/app.js'], function () {
        server.start.bind(server)();
    })
});


