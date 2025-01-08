/*
 * @Date: 2025-01-08 11:13:17
 * @Description: 获取随机字符串、随机数范围、随机数组中取值
 */

/**
 * @description 获取rgb随机颜色值，一般用于测试用
 * @type
 * @default
 * @example randomRgbColor()
 */
export const randomRgbColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

/**
 * @description: 获取随机字符串
 * @param {*} len 字符串长度
 */
export const randomString = (len: number) => {
  const chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789!@#$%^&#*";
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
export const randomRange = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * @description: 数组中获取随机数
 * @param {*} arr
 */
export const randomNum = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];