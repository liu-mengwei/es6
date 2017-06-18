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