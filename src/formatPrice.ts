/*
 * @Date: 2025-01-08 11:32:46
 * @Description: 金额用逗号分隔
 */
/**
 * @description 金额逗号分隔
 * @param {number} number 需要格式化的数值
 * @param {number} decimal 保留小数位数
 * @example 1314520.86 => 1,314,520.86
 */
export const formatPrice = function (number: number = 0, decimal = 2) {
  // 没有则返回undefined
  if (typeof number !== "number") throw new Error("参数类型错误，请输入数字类型");

  if (number < 0 || number === Infinity) {
   throw new Error("参数不能小于0且不能为Infinity");
  }

  // 将数值转换为字符串，并使用内置的 toFixed 方法来保留指定的小数位数
  const formattedValue = number.toFixed(decimal);

  let n = Number(formattedValue);
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
  const strNumber = formattedValue + "";
  const index = strNumber.indexOf(".");
  // 找到有小数的部分拼接小数部分
  if (index >= 0) {
    r += strNumber.substring(index);
  }
  return r;
};
