/**
 * Created by liumw on 2017/6/18.
 */
{
    let arr = Array.of('meme', 4, {name: 'liu'});
    let arr2 = ['meme', {name: 'liu'}];

    console.log(arr);
    console.log(arr2);
}


{
    let p = document.querySelectorAll('p');

    //类数组转化成数组
    let arr = Array.from(p);
    arr.forEach(function (item) {


        //为什么这里的printN访问不到
        //printN(item.textContent);
        console.log(item.textContent);
    })

}

{
    // 数组映射
    let arr2 = Array.from([1, 2, 3], function (item) {
        return item * 2;
    });
    console.log(arr2);
}

{
    // 数组填充
    let arr = [1, 2, 3];
    // 并不会扩大其长度 数据 start end
    let arr2 = arr.fill(9, 2, 5);
    console.log(arr);
}

{
    // 返回下标集合
    for (let index of [1, 2, 3].keys()) {
        console.log(index);
    }
    //for (let index of [1, 2, 3].values()) {// values有兼容性问题
    //    console.log(index);
    //}
    for (let [index,values] of [1, 2, 3].entries()) {
        console.log(index, values);
    }
    console.log([1, 2, 3].entries());
}

{
    //只找到一个
    console.log([1, 2, 3, 4].find(function (item) {
        return item > 3;
    }));
    console.log([1, 2, 3, NaN].includes(NaN));
}