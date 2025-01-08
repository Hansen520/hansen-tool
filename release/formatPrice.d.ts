/**
 * @description 金额逗号分隔
 * @type
 * @default
 * @example 1314520.86 => 1,314,520.86
 */
export declare const formatPrice: (number?: number) => string | undefined;
/**
* 格式化价格数额为字符串
* 可对小数部分进行填充，默认不填充
* @param price 价格数额，以分为单位!
* @param fill 是否填充小数部分 0-不填充 1-填充第一位小数 2-填充两位小数
* @example priceFormat(12, 4) => 0.1200
*/
export declare const priceFormat: (price: number, fill?: number) => string | number;
//# sourceMappingURL=formatPrice.d.ts.map