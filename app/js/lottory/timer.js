/**
 * Created by liumw on 2017/6/26.
 */
class Timer {
    //倒计时功能

    /**
     * @param end 截止时间
     * @param update 更新回掉
     * @param handle 倒计时结束回掉
     * */
    countdown(end, update, handle) {
        let self = this;
        const nowTime = new Date().getTime();
        const leaveTime = nowTime - end;
        if (leaveTime <= 0) {
            handle.call(self);
        }

        //一天有多少毫秒
        const day_x = 1000 * 60 * 60 * 24;
        const hour_x = 1000 * 60 * 60;
        const min_x = 1000 * 60;
        const second_x = 1000;

        //换算
        let result = [];
        let day = Math.floor(leaveTime / day_x);
        if (day > 0) {
            result.push(`<em>${day}</em>天`);
        }

        let hour = Math.floor((leaveTime - day * day_x) / hour_x);
        if (hour > 0) {
            result.push(`<em>${hour}</em>小时`);
        }

        let minute = Math.floor((leaveTime - day * day_x - hour * hour_x) / min_x);
        if (minute > 0) {
            result.push(`<em>${minute}</em>分钟`);
        }

        let second = Math.floor((leaveTime - day * day_x - hour * hour_x - minute * min_x) / second_x);
        if (second > 0) {
            result.push(`<em>${second}</em>秒`);
        }
        self.leaveTime = result.join('');

        update.call(self, result.join(''));
        setTimeout(function () {
            self.countdown(end, update, handle);
        }, 1000);
    }
}