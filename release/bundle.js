/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("        run(5);\r\n        function run(num) {\r\n           \r\n            const frag = document.createDocumentFragment()\r\n            //产生10个div，一开始的运动\r\n            for (var i = 0;i < num;i++) {\r\n                var odiv = document.createElement(\"div\");\r\n                odiv.className = 'ball';\r\n                odiv.style.background= randomRgbColor();\r\n                odiv.leftVal = 1 + i;//设置自定义属性初始值，并设置其left的变化量，这个也和球移动的角度有关\r\n                odiv.topVal = 1 + i;//设置自定义属性初始值，并设置其top的变化量，这个也和球移动的角度有关\r\n                frag.appendChild(odiv)\r\n            }\r\n            document.body.appendChild(frag)\r\n\r\n            var oball = document.querySelectorAll(\".ball\");\r\n            //可视区宽高\r\n            var maxW = document.documentElement.clientWidth - oball[0].clientWidth;//文档的宽减去球的宽度就是球移动的宽度\r\n            var maxH = document.documentElement.clientHeight - oball[0].clientHeight;//文档的高减去球的高度就是球移动的高度\r\n\r\n\r\n            //当浏览器高度发生改变时，重新计算高度，宽度值\r\n            window.onresize = function () {\r\n                var maxW = document.documentElement.clientWidth - oball[0].clientWidth;//文档的宽减去球的宽度就是球移动的宽度\r\n                var maxH = document.documentElement.clientHeight - oball[0].clientHeight;//文档的高减去球的高度就是球移动的高度\r\n            }\r\n\r\n            //碰撞第一次后的运动\r\n            player();\r\n            function player() {\r\n                \r\n                for (var i = 0; i < num; i++) {\r\n                    var aball = oball[i];\r\n                    // 元素距离左、顶端距离\r\n                    var sleft = aball.offsetLeft,\r\n                        stop = aball.offsetTop;\r\n                        // console.log(sleft,stop)\r\n                    var left = sleft + aball.leftVal,\r\n                        top = stop + aball.topVal;\r\n\r\n                    //一种限定的写法\r\n                    if(left > maxW || left < 0){\r\n                        left = Math.min(maxW , left);//8 5→5 0→0\r\n                        left = Math.max(left , 0);\r\n                        aball.leftVal = -aball.leftVal;//反弹\r\n                        document.body.bgColor = randomRgbColor2()\r\n                        aball.style.background = randomRgbColor();\r\n                    }\r\n\r\n                    if(top > maxH || top < 0){\r\n                        top = Math.min(maxH , top);//8 5→5 0→0\r\n                        top = Math.max(top , 0);\r\n                        aball.topVal = -aball.topVal;//反弹\r\n                        document.body.bgColor = randomRgbColor2()\r\n                        aball.style.background= randomRgbColor();\r\n                    }\r\n\r\n/*                    if (left > maxW){\r\n                        left = maxW;\r\n                        aball.leftVal = - aball.leftVal;//反弹\r\n                    }\r\n                    if (left < 0){\r\n                        left = 0;\r\n                        aball.leftVal = - aball.leftVal;//反弹\r\n                    }\r\n                    if (top > maxH){\r\n                        top = maxH;\r\n                        aball.topVal = - aball.topVal;//反弹\r\n                    }\r\n                    if (top < 0){\r\n                        top = 0;\r\n                        aball.topVal = -aball.topVal;//反弹\r\n                    }*/\r\n                    aball.style.left = left + 'px';\r\n                    aball.style.top = top + 'px';\r\n                }\r\n                requestAnimationFrame(player);\r\n            }\r\n        }\r\n\r\n\r\n        function randomRgbColor() {\r\n            var r = Math.floor(Math.random() * 255);\r\n            var g = Math.floor(Math.random() * 255);\r\n            var b = Math.floor(Math.random() * 255);\r\n\r\n            return \"radial-gradient(rgb(255,255,255),rgb(\"+r+\",\"+g+\",\"+b+\"))\";\r\n\r\n            //return \"rgb(\"+r+\",\"+g+\",\"+b+\")\";\r\n        }\r\n\r\n        function randomRgbColor2() {\r\n            var r = Math.floor(Math.random() * 100 + 100);\r\n            var g = Math.floor(Math.random() * 100 + 20);\r\n            var b = Math.floor(Math.random() * 255);\r\n\r\n            return \"rgb(\"+r+\",\"+g+\",\"+b+\")\";\r\n\r\n            //return \"rgb(\"+r+\",\"+g+\",\"+b+\")\";\r\n        }\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });