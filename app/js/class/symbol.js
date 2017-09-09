/**
 * Created by liumw on 2017/6/19.
 */

{
    // symbol.for 相当于单例

    let a1 = Symbol('zhi');
    let a2 = Symbol('zhi');

    let obj = {name: 'liu'};
    obj[a1] = 'meng';
    obj[a2] = 'liu';

    console.log(Reflect.ownKeys(obj));
}

