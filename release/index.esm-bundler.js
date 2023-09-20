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
    var value = window.localStorage.getItem(key) || '';
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
 * @description: 通过文件地址下载文件
 * @param {*} href 下载路径
 * @param {*} fileName 文件名
 */
var fileDownload = function (href, fileName) {
    // console.log(href, fileName);
    var a = document.createElement('a');
    a.style.display = 'none';
    a.setAttribute('target', '_self');
    fileName && a.setAttribute('download', fileName);
    a.href = href;
    a.setAttribute('href', href);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    return true;
};

export { fileDownload, formatPrice, localGet, localSet, randomRgbColor };
