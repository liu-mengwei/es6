/**
 * Created by liumw on 2017/6/19.
 */
// set作用就是去重
{
    let a = {'age': 18};
    let arr = ['add', 'delete', 'clear', 'has', {'age': 16}, {'age': 16}, a, a];
    let setList = new Set(arr);

    setList.forEach(function (item) {
        console.log(item);
    });

    for (let item of setList) {
        console.log(item);
    }
}

{
    let map = new Map();
    let arr = [1, 2, 3];
    map.set(arr, 'hanzhien');
    console.log('map:' + map.get(arr)); //获得的是值

    let map2 = new Map([['meng', 'zhienlike']]);
    console.log(map2, map2.size);

    map2.delete('meng');
    console.log();
}

{
    //增
    let map = new Map();
    let set = new Set();

    let key = {name: 'liu'};

    map.set(key, 'zhien'); //可以用任意类型做key
    set.add({love: 'zhien'});
    console.info(map);

    //查
    let map_exist = map.has(key); //{name:'liu'} 也为false认返回 函数返回符合条件的项目
    let setitem2 = set.has({love: 'zhien'}); // false set存的是引用
}

{
    let arr = [];
    arr.push({name: 'zhien'});
    let zhien = arr.find(function (item) {
        return item.name;
    });
    zhien = arr.find(item => item.name); //return 的是true false
    console.log(zhien);

    //改 -删
    arr.forEach(item => item.name ? item.name = 'han' : '');
    let index = arr.findIndex(item => item.name);
    arr.splice(index, 1);
    console.log(arr);

    //删
    let map = new Map([['han', 'zhien']]);
    map.delete('han');
    console.log(map);
}

{
    let set = new Set();
    set.add({name: 'liu'});
    set.add(1);
    set.delete(1); //和has一样也是传引用
    console.log(set);
}