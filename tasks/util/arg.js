import yargs from 'yargs';

const args = yargs

    .option('production', {
        boolean: true,
        default: false,
        describe: 'min all scripts'
    })

    .option('watch', {
        boolean: true,
        default: false,
        describe: 'watch all files'
    })

    .option('verbose', {
        boolean: true,
        default: false,
        describe: 'log'
    })

    .option('sourcemaps', {
        describe: 'force the creation of sroucemaps'
    })

    .option('port', {
        string: true,
        defalut: 8080,
        describe: 'server port'
    })

    //对输入的命令行以字符串进行解析
    .argv;

export default args;