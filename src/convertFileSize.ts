/**
 * 将文件大小从一个单位转换为另一个单位。
 *
 * @param {number} size 文件大小。
 * @param {string} fromUnit 初始单位（'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'）。
 * @param {string} toUnit 目标单位（'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'）。
 * @param {number} [decimalPoint=2] 结果保留的小数位数，默认为2。
 * @return {string} 转换后的文件大小，带单位。
 * @example console.log(convertFileSize(1, 'GB', 'MB')); // 输出: 1024.00 MB
 */
export const convertFileSize = (size: number, fromUnit: string, toUnit: string, decimalPoint = 2) => {
    // 定义单位与字节之间的转换关系
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    // 获取初始单位和目标单位的索引
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
  
    // 如果单位不在列表中，抛出错误
    if (fromIndex === -1 || toIndex === -1) {
      throw new Error('Invalid units');
    }
  
    // 计算初始单位与目标单位之间的转换系数
    const exponent = toIndex - fromIndex;
    // 计算结果大小
    const resultSize = size / Math.pow(1024, exponent);
  
    // 返回格式化后的结果
    return parseFloat(resultSize.toFixed(decimalPoint)) + ' ' + toUnit;
  }


  /**
 * 模糊匹配格式化文件大小，将字节转换为 KB、MB、GB 或 TB。
 * @param {number} sizeInBytes - 文件大小，以字节为单位
 * @returns {string} 格式化后的文件大小，包括单位
 * @example formatFileSize(123456789) => 117.74 MB
 */
export const formatFileSize = (sizeInBytes: number) => {
    // 如果大小为0，直接返回
    if (sizeInBytes === 0) return '0 Bytes';
  
    // 定义单位数组
    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  
    // 计算指数，即单位数组的索引, 返回x的自然对数，以 2 为底，再除以 Math.log(1024)，即得到指数
    const exponent = Math.floor(Math.log(sizeInBytes) / Math.log(1024));
  
    // 根据指数计算大小，并保留两位小数
    const size = (sizeInBytes / Math.pow(1024, exponent)).toFixed(2);
  
    // 获取对应的单位
    const unit = units[exponent];
  
    // 返回格式化后的字符串
    return `${size}${unit}`;
  }
  