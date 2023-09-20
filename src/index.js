/*
 * @Date: 2023-09-20 10:16:06
 * @Description: description
 */
import { sum } from 'lodash-es';
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
export const formatPrice = (number) => {
  if (!number) return 0;
  let n = number;
  let r = "";
  let temp;
  do {
    // 求模的值， 用于获取高三位，这里可能有小数
    let mod = n % 1000;
    // 值是不是大于1，是继续的条件
    n = n / 1000;
    // 高三位
    temp = ~~mod;
    // 1.填充: n > 1 循环未结束， 就要填充为比如 1 => 001
    // 不然temp = ~~mod的时候, 1 001， 就会变成 "11"
    // 2.拼接“,”
    r = (n >= 1 ? `${temp}`.padStart(3, "0") : temp) + (!!r ? "," + r : "");
  } while (n >= 1);
  const strNumber = number + "";
  let index = strNumber.indexOf(".");
  // 拼接小数部分
  if (index >= 0) {
    r += strNumber.substring(index);
  }
  return r;
};

export const test = () => {
  console.log(sum[(1, 2)]);
};
