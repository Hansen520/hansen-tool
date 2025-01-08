/**
 * @description rgba的颜色值转为Hex颜色值
 * @type
 * @default
 * @example colorRgbaToHex('rgb(255,255,255)') => #ffffff
 */
export declare const colorRgbaToHex: (rgba: string) => string;
/**
 * @description rgba的颜色值转为Hex颜色值
 * @type
 * @default
 * @example colorHexToRgb('#ffffff') => rgb(255,255,255)
 */
export declare const colorHexToRgb: (hex: string) => string;
/**
* @description rgba的颜色值转为Hex颜色值
* @type
* @default
* @example colorHexToRgb('#ffffff', 1) => rgb(255,255,255, 1)
*/
export declare const colorHexToRgba: (hex: string, alpha?: number) => string;
//# sourceMappingURL=colorToTran.d.ts.map