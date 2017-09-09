/**
 * Created by liumw on 2017/6/18.
 */
var zhien = {

    //es6方法简写
    eat(){
        console.log('可爱的吃');
    }
};

{
    //属性表达式
    let a = 'b';
    let c = 'c';
    let obj = {
        [a + c]: 'b'
    };
    console.log(obj.bc);
}

{
    //新增API
    let a = {a: 'a'};
    Object.assign(a, {b: 'b'}); //浅拷贝 ，只拷贝对象自身的属性，不包含继承的属性
    console.log(a);

    var b = {name: 'zhien'};
    for (let [key,value] of Object.entries(b)) {
        console.log([key, value]);
    }

    for (let [key,value] of Object.entries(b)) {
        console.log([key, value]);
    }

}