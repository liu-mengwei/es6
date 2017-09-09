/**
 * Created by liumw on 2017/6/25.
 */
export default{
    log(){
        console.log('memeda');
    }
}

{
    let ajax = function () {

        return new Promise(function (resolve, reject) {
            $.ajax({
                url: "",
                dataType: 'json',
                method: 'get',
                success: function (data) {
                    resolve();
                }
            });
        })
    };

    ajax()
        .then(function () {
            $.ajax({
                success: function () {

                }
            });


            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve();
                }, 1000)
            })
        })
        .then(function () {
            console.log('执行3');
        });
}

{
    let ajax2 = function (callback) {
        setTimeout(callback, 1000);
    };
    ajax2(function () {
        console.log('回掉执行');
    })
}

{
    //同时加载图片，全部加载完成才显示
    function loadImage(src) {
        return new Promise(function (resolve, reject) {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                resolve(img);
            };
            img.onerror = function () {
                reject(img);
            };
        })
    }

    function showImage(imgs) {
        if (imgs instanceof Array) {
            imgs.forEach(function (img) {
                var imgElement = document.body.appendChild(img);
            })
        } else {
            var imgElement = document.body.appendChild(imgs);
        }
    }

    Promise.all([
        loadImage('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'),
        loadImage('http://www.runoob.com/wp-content/uploads/2014/06/angular.jpg')
    ]).then(showImage);
}

{
    let a = 'meng';
    let b = {
        [a]: 'meng'
    };
    console.log(b);
}

{
    let obj = [1, 2, 3];
    let a = obj[Symbol.iterator]();//遍历器对象
}


// iterator接口
//{
//    let obj = {
//        arr1: [1, 2, 3],
//        arr2: [4, 5, 6],
//        [Symbol.iterator](){
//            let self = this;
//            let arr = self.arr1.concat(self.arr2);
//            let index = 0;
//            //返回的是遍历器对象，里面必须有next方法
//            return {
//                next(){
//                    if (index < arr.length) {
//                        return {
//                            value: arr[index++],
//                            done: false
//                        };
//                    } else {
//                        return {
//                            value: arr[index++],
//                            done: true
//                        };
//                    }
//                }
//            };
//        }
//    };
//    for (value of obj) {
//        console.log(value);
//    }
//}


