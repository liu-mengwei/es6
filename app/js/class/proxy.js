/**
 * Created by liumw on 2017/6/21.
 */

{
    let org = {name: 'liu', age: 18};
    //let keys = Object.keys(org).filter(item=>item == 'name');
    //console.log(keys);

    var proxy = new Proxy(org, {
        // 变化数据
        get(target, key){
            if (key == 'name') {
                return 'meng';
            }
            return target[key];
        },
        set(target, key, value){
            if (key == 'age') {
                return (target[key] = 18);
            } else {
                return (target[key] = value);
            }
        }
    });

    console.log(proxy.name);
    proxy.name = 'www';
    console.log('org', org);
    console.log('proxy', proxy);


}

{
    let cat = {
        name: 'liu',
        eat(){
            console.log(this.name);
        }
    };
    Reflect.set(cat, 'name', 'meng');
    console.info(cat);
}

//代理常用的场景

{
    function createProxy(org, handler) {
        return new Proxy(org, {
            handler: handler,
            set(target, key, value, proxy){
                if (target.hasOwnProperty(key)) {

                    let validate = this.handler[key];
                    if (!validate(value)) {
                        throw Error('验证不通过');
                    } else {
                        return Reflect.set(target, key, value, proxy);
                    }

                } else {
                    throw Error('属性不存在');
                }
            }
        });
    }

    //添加校验条件
    const handler = {
        name(name){
            return typeof name == 'string';
        },
        age(age){
            return (typeof age == 'number' && age < 30);
        }
    };

    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            return createProxy(this, handler);
        }
    }

    let man = new Person('liu', 18);
    man.age = 20;
    console.log(man);
}




