(function (exports) {
  'use strict';

  /*
   * @Date: 2023-09-20 10:16:06
   * @Description: description
   */
  // import { sum } from 'lodash-es';
  /**
   * @description 获取rgb随机颜色值
   * @type
   * @default
   * @example randomRgbColor()
   */
  var randomRgbColor = function () {
      var r = Math.floor(Math.random() * 100 + 100);
      var g = Math.floor(Math.random() * 100 + 20);
      var b = Math.floor(Math.random() * 255);
      return "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
  };
  /**
   * @description 金额逗号分隔
   * @type
   * @default
   * @example 1314520.86 => 1,314,520.86
   */
  var formatPrice = function (number) {
      if (!number)
          return 0;
      var n = number;
      var r = "";
      var temp;
      do {
          // 求模的值， 用于获取高三位，这里可能有小数
          var mod = n % 1000;
          // 值是不是大于1，是继续的条件
          n = n / 1000;
          // 高三位
          temp = ~~mod;
          // 1.填充: n > 1 循环未结束， 就要填充为比如 1 => 001
          // 不然temp = ~~mod的时候, 1 001， 就会变成 "11"
          // 2.拼接“,”
          r = (n >= 1 ? "".concat(temp).padStart(3, "0") : temp) + (!!r ? "," + r : "");
      } while (n >= 1);
      var strNumber = number + "";
      var index = strNumber.indexOf(".");
      // 拼接小数部分
      if (index >= 0) {
          r += strNumber.substring(index);
      }
      return r;
  };
  /**
   * @description 获取本地存储
   * @param {string} key
   * @return {*}
   */
  var localGet = function (key) {
      var value = window.localStorage.getItem(key) || "";
      try {
          return JSON.parse(value);
      }
      catch (error) {
          return value;
      }
  };
  /**
   * @description 设置本地存储
   * @param {string} key
   * @param {any} value
   * @return {*}
   */
  var localSet = function (key, value) {
      window.localStorage.setItem(key, JSON.stringify(value));
  };
  /**
   * @description 移除某个本地存储
   * @param {string} key
   * @return {*}
   */
  var localRemove = function (key) {
      window.localStorage.removeItem(key);
  };
  /**
   * @description 清空本地存储
   * @return {*}
   */
  var localClear = function () {
      window.localStorage.clear();
  };
  /**
   * @description: 通过文件地址下载文件
   * @param {*} href 下载路径
   * @param {*} fileName 文件名
   */
  var fileDownload = function (href, fileName) {
      // console.log(href, fileName);
      var a = document.createElement("a");
      a.style.display = "none";
      a.setAttribute("target", "_self");
      fileName && a.setAttribute("download", fileName);
      a.href = href;
      a.setAttribute("href", href);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      return true;
  };
  /**
   * @description: 强制修改稿响应头下载文件
   * @param {*} url 下载路径
   * @param {*} fileName 文件名
   */
  var fileDownloadByType = function (url, fileName) {
      fetch(url, {
          method: "get"
      })
          .then(function (res) {
          if (res.status !== 200) {
              return res.json();
          }
          return res.arrayBuffer();
      })
          .then(function (blobRes) {
          // 生成 Blob 对象，设置 type 等信息
          var e = new Blob([blobRes], {
              type: "application/octet-stream"
          });
          // 将 Blob 对象转为 url
          var link = window.URL.createObjectURL(e);
          var a = document.createElement("a");
          a.href = link;
          a.download = fileName;
          a.click();
      })["catch"](function (err) {
          console.error(err);
      });
  };
  /**
   * @description: 通过后端接口下载文件
   * @param {*} filename 文件名
   * @param {*} blobContent 后端返回二进制流数据
   * @param {*} type 文件类型
   *
   */
  var fileDownloadByRes = function (filename, blobContent, type) {
      if (type === void 0) { type = 'vnd.openxmlformats-officedocument.spreadsheetml.sheet'; }
      console.log(filename, blobContent, 141);
      var blob = new Blob([blobContent], { type: "application/".concat(type, ";charset=utf-8") });
      // 获取heads中的filename文件名
      var downloadElement = document.createElement('a');
      // 创建下载的链接
      var href = window.URL.createObjectURL(blob);
      downloadElement.href = href;
      // 下载后文件名
      downloadElement.download = filename;
      document.body.appendChild(downloadElement);
      // 点击下载
      downloadElement.click();
      // 下载完成移除元素
      document.body.removeChild(downloadElement);
      // 释放掉blob对象
      window.URL.revokeObjectURL(href);
  };
  /**
   * @description: 滑滚动页面到顶部
   */
  var scrollToTop = function () {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(0, scrollTop - scrollTop / 8);
      }
  };
  /**
   * @description: 滚动到页面底部
   */
  var scrollToBottom = function () {
      window.scrollTo(0, document.documentElement.clientHeight);
  };
  /**
   * @description: 根据开始年和结束年获取之间的所有日期(包含开始和结束)
   * @example getYears(2019, 2024) => [2019, 2020, 2021, 2022, 2023, 2024]
   */
  function getYears(startYear, endYear) {
      var years = [];
      for (var year = startYear; year <= endYear; year++) {
          years.push(year);
      }
      return years.reverse();
  }
  /**
   * @description: 函数睡眠
   */
  var sleep = function (time, fn) {
      if (time === void 0) { time = 10; }
      return new Promise(function (resolve) {
          var timer = setTimeout(function () {
              clearTimeout(timer);
              fn && typeof fn === 'function' && fn();
              resolve(true);
          }, time);
      });
  };
  /**
   * @description: 获取文件的后缀名
   * @param {*} filename
   */
  var getExt = function (filename) {
      return filename.split('.').pop().toLocaleLowerCase();
  };
  /**
   * @description: 判断浏览器内核
   */
  var checkBrowser = function () {
      var t = window.navigator.userAgent.toLowerCase();
      return t.indexOf('msie') >= 0
          ? {
              // ie < 11
              type: 'IE',
              version: Number(t.match(/msie ([\d]+)/)[1])
          }
          : t.match(/trident\/.+?rv:(([\d.]+))/)
              ? {
                  // ie 11
                  type: 'IE',
                  version: 11
              }
              : t.indexOf('edge') >= 0
                  ? {
                      type: 'Edge',
                      version: Number(t.match(/edge\/([\d]+)/)[1])
                  }
                  : t.indexOf('firefox') >= 0
                      ? {
                          type: 'Firefox',
                          version: Number(t.match(/firefox\/([\d]+)/)[1])
                      }
                      : t.indexOf('chrome') >= 0
                          ? {
                              type: 'Chrome',
                              version: Number(t.match(/chrome\/([\d]+)/)[1])
                          }
                          : t.indexOf('opera') >= 0
                              ? {
                                  type: 'Opera',
                                  version: Number(t.match(/opera.([\d]+)/)[1])
                              }
                              : t.indexOf('Safari') >= 0
                                  ? {
                                      type: 'Safari',
                                      version: Number(t.match(/version\/([\d]+)/)[1])
                                  }
                                  : {
                                      type: t,
                                      version: -1
                                  };
  };
  /**
   * @description: 获取随机字符串  len为字符串长度
   * @param {*} len
   */
  var randomString = function (len) {
      var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789';
      var strLen = chars.length;
      var randomStr = '';
      for (var i = 0; i < len; i++) {
          randomStr += chars.charAt(Math.floor(Math.random() * strLen));
      }
      return randomStr;
  };
  /**
   * @description: 生成指定范围随机数
   * @param {*} min
   * @param {*} max
   */
  var randomRange = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };
  /**
   * @description: 数组中获取随机数
   * @param {*} arr
   */
  var randomNum = function (arr) { return arr[Math.floor(Math.random() * arr.length)]; };

  exports.checkBrowser = checkBrowser;
  exports.fileDownload = fileDownload;
  exports.fileDownloadByRes = fileDownloadByRes;
  exports.fileDownloadByType = fileDownloadByType;
  exports.formatPrice = formatPrice;
  exports.getExt = getExt;
  exports.getYears = getYears;
  exports.localClear = localClear;
  exports.localGet = localGet;
  exports.localRemove = localRemove;
  exports.localSet = localSet;
  exports.randomNum = randomNum;
  exports.randomRange = randomRange;
  exports.randomRgbColor = randomRgbColor;
  exports.randomString = randomString;
  exports.scrollToBottom = scrollToBottom;
  exports.scrollToTop = scrollToTop;
  exports.sleep = sleep;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
