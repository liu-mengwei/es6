/**
 * Created by liumw on 2017/6/18.
 */

// 这里是模块化，obj并不会污染全局变量
var obj = {
    name: 'meng',
    drink: ()=> {
        console.log('喝水');
    },
    eat: function () {

        // 函数定义时所处函数的调用环境
        var _this = this;

        var aa = ()=> {
            console.log(this);
            console.log(_this); //相同的
        };
        aa();
    },

    //----------------三种写法----------------

    sleep: function () {
        var _this = this;
        setTimeout(function () {
            console.log(this.name);
        }, 1000)
    },

    // 这里this其实就是干的上面这个事
    sleep2: function () {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    },

    // 这里this其实就是干的上面这个事
    sleep3: function () {
        setTimeout(function () {
            console.log('bind:' + this.name);
        }.bind(this), 1000);
    }

};

obj.eat.apply({name: 'liu'}); // liu
obj.sleep3();

function outer() {
    this.name = 'meng';

    function inner() {
        console.log('inner:' + this.name);
    }

    var a = function () {
        var b = ()=> {
            debugger;
            console.log('b' + this.name);//undefined
        };
        b();
    };

    // 函数直接调用时，this为undefined (这个函数不是箭头函数时)
    // 当为箭头函数， var _this = this 这段话加到最接近的function()下面，而不是箭头函数下面。


    //inner();
    a();

    //inner.apply({name: 'liu'});
}

var a = new outer();