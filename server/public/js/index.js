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

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _templateObject = _taggedTemplateLiteral([' i am student ,name is ', ',age is ', ''], [' i am student ,name is ', ',age is ', '']);

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
	    var _a$b = { a: 1, b: 2 },
	        a = _a$b.a,
	        b = _a$b.b;

	    print(a, b);
	}

	{
	    var _a$b2 = { a: 1, b: 2 },
	        va = _a$b2.a,
	        vb = _a$b2.b;

	    print(va, vb);
	}

	//解构赋值，左右形式相同
	{
	    var _a = { a: [{ title: 'title' }] },
	        _a$a = _slicedToArray(_a.a, 1),
	        vtitle = _a$a[0].title;

	    print(vtitle);

	    var reg1 = /user\d/g;
	    print(reg1.exec('user1user2').index, reg1.exec('user1user2').index, reg1.exec('user1user2'), reg1.exec('user1').index);
	}

	{
	    var change = function change(s1, v1, v2) {
	        //print(s1);
	        //print(v1);
	        //print(v2);
	        return v1 + s1 + v2;
	    };

	    var student = { name: 'mengmeng', age: '16' };

	    //标签模板
	    print(change(_templateObject, student.name, student.age));
	}

/***/ })
/******/ ]);