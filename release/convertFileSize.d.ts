/**
 * 精准将文件大小从一个单位转换为另一个单位。
 *
 * @param {number} size 文件大小。
 * @param {string} fromUnit 初始单位（'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'）。
 * @param {string} toUnit 目标单位（'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'）。
 * @param {number} [decimalPoint=2] 结果保留的小数位数，默认为2。
 * @return {string} 转换后的文件大小，带单位。
 * @example console.log(convertFileSize(1, 'GB', 'MB')); // 输出: 1024.00 MB
 */
export declare const convertFileSize: (size: number, fromUnit: string, toUnit: string, decimalPoint?: number) => string;
/**
* 模糊匹配格式化文件大小，将字节转换为 KB、MB、GB 或 TB。这边主要看是否为1024的倍数
* @param {number} sizeInBytes - 文件大小，以字节为单位
* @returns {string} 格式化后的文件大小，包括单位
* @example formatFileSize(123456789) => 117.74 MB
*/
export declare const formatFileSize: (sizeInBytes: number) => string;
//# sourceMappingURL=convertFileSize.d.ts.map