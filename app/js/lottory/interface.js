/**
 * Created by liumw on 2017/6/26.
 */
import $ from 'jquery';

class Interface {

    /**
     * 获取遗漏号码
     * @param issue 期号
     * */
    getOmit(issue) {
        let self = this;

        return new Promise(function (resolve, reject) {
            $.ajax({
                url: '/get/Omit',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function (data) {
                    self.setOmit(data); //这种方式就把数据添加到对象里，就不用传回掉函数之类的
                    resolve.call(self);//这种写法就可以用this
                },
                error: function (err) {
                    reject.call(self);
                }
            });
        });
    }


    /**
     * 获取开奖号码
     * @param issue 期号
     * */
    getOpenCode(issue) {
        let self = this;

        return new Promise(function (resolve, reject) {
            $.ajax({
                url: '/get/OpenCode',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function (data) {
                    self.setOpenCode(data);
                    resolve.call(self, data);
                },
                error: function (err) {
                    reject.call(self, err);
                }
            });
        });
    }


    /**
     * 获取当前状态
     * @param issue 期号
     * */
    getState(issue) {
        let self = this;

        return new Promise(function (resolve, reject) {
            $.ajax({
                url: '/get/state',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function (data) {
                    resolve.call(self, data);
                },
                error: function (err) {
                    reject.call(self, err);
                }
            });
        });
    }


}