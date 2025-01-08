/*
 * @Date: 2025-01-08 11:32:46
 * @Description: 金额用逗号分隔
 */
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
 * 格式化价格数额为字符串
 * 可对小数部分进行填充，默认不填充
 * @param price 价格数额，以分为单位!
 * @param fill 是否填充小数部分 0-不填充 1-填充第一位小数 2-填充两位小数
 * @example priceFormat(12, 4) => 0.1200
 */
export const priceFormat = (price: number, fill = 0) => {
    if (isNaN(price) || price === null || price === Infinity) {
      return price;
    }
  
    let priceFormatValue: number | string = Math.round(parseFloat(`${price}`) * 10 ** 8) / 10 ** 8; // 恢复精度丢失
    priceFormatValue = `${Math.ceil(priceFormatValue) / 100}`; // 向上取整，单位转换为元，转换为字符串
    if (fill > 0) {
      // 补充小数位数
      if (priceFormatValue.indexOf(".") === -1) {
        priceFormatValue = `${priceFormatValue}.`;
      }
      const n = fill - priceFormatValue.split(".")[1]?.length;
      for (let i = 0; i < n; i++) {
        priceFormatValue = `${priceFormatValue}0`;
      }
    }
    return priceFormatValue;
  };