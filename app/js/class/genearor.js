/**
 * Created by liumw on 2017/6/25.
 */

import log from './promise';
log.log();

{
    //抽奖
    function draw(count) {
        //抽奖
        console.log(`剩余${count}次`);
        return 'zhien';
    }

    let start = function* (count) {
        while (count > 0) {
            count--;
            yield draw(count);//value undefined 实际是设置值{value:,done:}
        }
    };

    let generator = start(5);
    debugger;
    let btn = document.createElement('button');
    btn.textContent = '抽奖';
    document.body.appendChild(btn);
    btn.addEventListener('click', function () {
        let a = generator.next();
    });

}

{
    let func = function* () {
        yield 1;
        yield 2;
        return 3;
    };
    let generator = func();
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
}

//遍历对象
{
    let obj = {};
    obj[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        return 3;
    };
    for (let value of obj) {
        console.log(value);
    }
}

{
    let func = function () {
        let a = 5;
        return a + 5;
    };

    console.log(func());

}




