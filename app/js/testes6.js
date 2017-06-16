/**
 * Created by liumw on 2017/6/14.
 */

function print() {
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
    print(a, b);
}

{
    let {a:va,b:vb}={a: 1, b: 2};
    print(va, vb);
}


{
    let {a:[{title:vtitle}]} = {a: [{title: 'title'}]};
    print(vtitle);

    var reg1 = /user\d/g;
    print(reg1.exec('user1user2').index, reg1.exec('user1user2').index,reg1.exec('user1user2')
    ,reg1.exec('user1').index);
}
