/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Created by liumw on 2017/6/18.
	 */

	// 这里是模块化，obj并不会污染全局变量
	var obj = {
	    name: 'meng',
	    drink: function drink() {
	        console.log('喝水');
	    },
	    eat: function eat() {
	        var _this2 = this;

	        // 函数定义时所处函数的调用环境
	        var _this = this;

	        var aa = function aa() {
	            console.log(_this2);
	            console.log(_this); //相同的
	        };
	        aa();
	    },

	    //----------------三种写法----------------

	    sleep: function sleep() {
	        var _this = this;
	        setTimeout(function () {
	            console.log(this.name);
	        }, 1000);
	    },

	    // 这里this其实就是干的上面这个事
	    sleep2: function sleep2() {
	        var _this3 = this;

	        setTimeout(function () {
	            console.log(_this3.name);
	        }, 1000);
	    },

	    // 这里this其实就是干的上面这个事
	    sleep3: function sleep3() {
	        setTimeout(function () {
	            console.log('bind:' + this.name);
	        }.bind(this), 1000);
	    }

	};

	obj.eat.apply({ name: 'liu' }); // liu
	obj.sleep3();

/***/ })
/******/ ]);