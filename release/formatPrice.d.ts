/**
 * @description 金额逗号分隔
 * @param {number} number 需要格式化的数值
 * @param {number} decimal 保留小数位数
 * @example 1314520.86 => 1,314,520.86
 */
export declare const formatPrice: (number?: number, decimal?: number) => string;
/**
 * @description 将金额转化为汉字的繁体字
 * @param {number} number 需要传入的数值
 * @example 1314520.86 => 壹佰叁拾壹万肆仟伍佰贰拾圆捌角陆分
 */
export declare const convertCurrency: (money: number) => string;
//# sourceMappingURL=formatPrice.d.ts.map