import { isArray, uniq } from "lodash-es";
import pLimitAsync from "./asyncPool";
import Storage from "./storage";

/**
 * @description 获取rgb随机颜色值
 * @type
 * @default
 * @example randomRgbColor()
 */
export const randomRgbColor = () => {
  const r = Math.floor(Math.random() * 100 + 100);
  const g = Math.floor(Math.random() * 100 + 20);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

/**
 * @description 金额逗号分隔
 * @type
 * @default
 * @example 1314520.86 => 1,314,520.86
 */
export const formatPrice = function (number: number = 0) {
  /* 设置边界值 */
  if (number === 0) return "0";
  // 没有则返回undefined
  if (!number) return undefined;
  let n = number;
  let r = "";
  let temp: any;
  do {
    // 求模的值， 用于获取高三位，这里可能有小数
    const mod = n % 1000;
    // 值是不是大于1，是继续的条件
    n = n / 1000;
    // 高三位
    temp = ~~mod;
    // 1.填充: n > 1 循环未结束， 就要填充为比如 1 => 001
    // 不然temp = ~~mod的时候, 1 001， 就会变成 "11"
    // 2.拼接“,”
    r = (n >= 1 ? "".concat(temp).padStart(3, "0") : temp) + (!!r ? "," + r : "");
  } while (n >= 1);
  const strNumber = number + "";
  const index = strNumber.indexOf(".");
  // 拼接小数部分
  if (index >= 0) {
    r += strNumber.substring(index);
  }
  return r;
};

/**
 * @description: 通过文件地址下载文件
 * @param {*} href 下载路径
 * @param {*} fileName 文件名
 */
export const fileDownload = (href: string, fileName: string) => {
  const a = document.createElement("a");
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
export const fileDownloadByType = (url: string, fileName: string) => {
  fetch(url, {
    method: "get",
  })
    .then((res) => {
      if (res.status !== 200) {
        return res.json();
      }
      return res.arrayBuffer();
    })
    .then((blobRes) => {
      // 生成 Blob 对象，设置 type 等信息
      const e = new Blob([blobRes], {
        type: "application/octet-stream",
      });
      // 将 Blob 对象转为 url
      const link = window.URL.createObjectURL(e);
      const a = document.createElement("a");
      a.href = link;
      a.download = fileName;
      a.click();
    })
    .catch((err) => {
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
export const fileDownloadByRes = (
  filename,
  blobContent,
  type = "vnd.openxmlformats-officedocument.spreadsheetml.sheet"
) => {
  console.log(filename, blobContent, 141);
  const blob = new Blob([blobContent], { type: `application/${type};charset=utf-8` });
  // 获取heads中的filename文件名
  const downloadElement = document.createElement("a");
  // 创建下载的链接
  const href = window.URL.createObjectURL(blob);
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
export const scrollToTop = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, scrollTop - scrollTop / 8);
  }
};

/**
 * @description: 滚动到页面底部
 */
export const scrollToBottom = () => {
  window.scrollTo(0, document.documentElement.clientHeight);
};

/**
 * @description: 根据开始年和结束年获取之间的所有日期(包含开始和结束)
 * @example getBetweenYears(2019, 2024) => [2019, 2020, 2021, 2022, 2023, 2024]
 */
export function getBetweenYears(startYear: number, endYear: number) {
  const years: any = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }
  return [...years].reverse();
}

/**
 * @description: 函数睡眠
 */
export const sleep = (time = 10, fn?: () => void) => {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      fn && typeof fn === "function" && fn();
      resolve(true);
    }, time);
  });
};

/**
 * @description: 获取文件的后缀名
 * @param {*} filename
 */
export const getExt = (filename: string): string => {
  return (filename.split(".").pop() as string).toLocaleLowerCase();
};

/**
 * @description: 判断浏览器内核
 */
export const checkBrowser = () => {
  const t = (window as any).navigator.userAgent.toLowerCase();
  return t.indexOf("msie") >= 0
    ? {
        // ie < 11
        type: "IE",
        version: Number(t.match(/msie ([\d]+)/)[1]),
      }
    : t.match(/trident\/.+?rv:(([\d.]+))/)
    ? {
        // ie 11
        type: "IE",
        version: 11,
      }
    : t.indexOf("edge") >= 0
    ? {
        type: "Edge",
        version: Number(t.match(/edge\/([\d]+)/)[1]),
      }
    : t.indexOf("firefox") >= 0
    ? {
        type: "Firefox",
        version: Number(t.match(/firefox\/([\d]+)/)[1]),
      }
    : t.indexOf("chrome") >= 0
    ? {
        type: "Chrome",
        version: Number(t.match(/chrome\/([\d]+)/)[1]),
      }
    : t.indexOf("opera") >= 0
    ? {
        type: "Opera",
        version: Number(t.match(/opera.([\d]+)/)[1]),
      }
    : t.indexOf("Safari") >= 0
    ? {
        type: "Safari",
        version: Number(t.match(/version\/([\d]+)/)[1]),
      }
    : {
        type: t,
        version: -1,
      };
};

/**
 * @description: 获取随机字符串  len为字符串长度
 * @param {*} len
 */
export const randomString = (len) => {
  const chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789";
  const strLen = chars.length;
  let randomStr = "";
  for (let i = 0; i < len; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * strLen));
  }
  return randomStr;
};

/**
 * @description: 生成指定范围随机数
 * @param {*} min
 * @param {*} max
 */
export const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * @description: 数组中获取随机数
 * @param {*} arr
 */
export const randomNum = (arr) => arr[Math.floor(Math.random() * arr.length)];

/**
 * @description: 根据递归数组获取映射的路径
 * @param {*} array 要被递归的数组
 * @param {*} parentSubjectCode，目标
 * @param {*} period 对哪个字段进行映射，默认为value
 * @example [
    {
      value: "a",
      children: [{ value: "g4", label: '3', children: [
        {
          value: 'yy'
        }
      ]}],
    }] ====> ['a', 'g4', 'yy']
 */
export const findParentNodeArray = (array: any[], parentSubjectCode, period: string = "value") => {
  if (!isArray(array)) {
    throw "传入的为非数组，请重新传入";
  }
  const parentSubjectStock: any = []; // 存储父节点
  let going = true; // 是否已找到要查到的节点
  const findParentNode = function (array, code) {
    array.forEach((item: any) => {
      if (!going) {
        return;
      }
      parentSubjectStock.push(item);
      if (item[period] === code) {
        going = false;
      } else if (item.children) {
        findParentNode(item.children, code);
      } else {
        parentSubjectStock.pop();
      }
    });
    if (going) parentSubjectStock.pop();
  };
  findParentNode(array, parentSubjectCode);
  return parentSubjectStock.map((item) => item[period]);
};


/*
  @param {*} array 要被递归的数组
  @des: 判断数组内是否有元素重复，如果有返回true，没有返回false
  
*/

export const hasDuplicates = (arr: any[]) => {
  if (!isArray(arr)) {
    throw '请传入数组';
  }
  if (arr.length === 1) {
    return false;
  }
  // lodash 数组去重
  return uniq(arr).length !== arr.length; 
}


export { pLimitAsync, Storage };
