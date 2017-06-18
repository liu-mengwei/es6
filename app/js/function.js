/**
 * Created by liumw on 2017/6/18.
 */

{
    function test(a = 'liu', b = 'meng', c) {
        console.log(a, b, c);
    }

    test('liu', 'meng', 'wei');
}

{
    let x = 'meng';

    // 这里的x是参数
    function test(x, y = x) {
        console.log(x, y);
    }

    function test2(c, y = x) {
        console.log(c, y);
    }

    test();
    test2();
}

// rest参数
{
    function test(a, b, ...extendArgs) {
        for (let item of extendArgs) {
            console.log(item);
        }
        console.log('arguments[0]： ' + arguments[0]);
    }

    test(3, 4, 5, 4, 5);
    console.log('a', ...[1, 2, 3]);
}

// 箭头函数 v*3 函数返回值

var arrow = v => {
    console.log('this:' + this)
};
arrow();


{
    function test() {
        var self = this;

        //返回的是一个号码，用来取消定时
        var inner = setTimeout(()=> {
            console.log(this.id);
        }, 1000);
        var inner2 = setTimeout(function () {
            console.log(this.id); //undefined
        });
    }

    test.apply({id: 'hanzhien'});
}