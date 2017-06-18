/**
 * Created by liumw on 2017/6/14.
 */

function printN() {
    var str = '';
    for (var i in arguments) {
        str += arguments[i];
    }
    str += '\n';

    var span = document.createElement('span');
    span.appendChild(document.createTextNode(str));
    document.getElementById("content").appendChild(span);
}


{
    let {a,b}={a: 1, b: 2};
    printN(a, b);
}

{
    let {a:va,b:vb}={a: 1, b: 2};
    printN(va, vb);
}


//解构赋值，左右形式相同
{
    let {a:[{title:vtitle}]} = {a: [{title: 'title'}]};
    printN(vtitle);

    var reg1 = /user\d/g;
    printN(reg1.exec('user1user2').index, reg1.exec('user1user2').index, reg1.exec('user1user2')
        , reg1.exec('user1').index);
}

{
    let student = {name: 'mengmeng', age: '16'};

    //标签模板
    printN(change` i am student ,name is ${student.name},age is ${student.age}`);
    function change(s1, v1, v2) {
        //printN(s1);
        //printN(v1);
        //printN(v2);
        return v1 + s1 + v2;
    }
}
