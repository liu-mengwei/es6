/**
 * Created by liumw on 2017/6/26.
 */

class Calculate {

    /**
     * 计算注数
     * @param active 选择的号码
     * @param playname 玩法
     *
     * */
    computeCount(active, playname) {
        let count = 0;
        const exist = this.playList.has(playname);
        const arr = new Array(active).fill('0');
        if (exist && playname.charAt(0) === 'r') {
            count = Calculate.combine(arr, playname.substring(1));
        }
        return count;
    }

    /**
     * 注数算法
     * */
    static combine(arr, size) {
        let allResult = [];

        //递归
        (function f(arr, size, result) {
            let arrLen = arr.length;
            //todo
            if (size < arrLen) {
                return;
            }
            if (size == arrLen) {
                allResult.push([].concat(result, arr));
            } else {
                for (let i = 0; i < arrLen; i++) {
                    let newResult = [].concat(result);
                    newResult.push(arr[i]);
                    if (size === 1) {
                        allResult.push(newResult);
                    } else {
                        let newArr = [].concat(arr);
                        newArr.splice(0, i + 1);
                        f(newArr, size - 1, newResult);
                    }
                }
            }
        })(arr, size, []);
    }

}













