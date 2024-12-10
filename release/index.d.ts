/**
 * @description 获取rgb随机颜色值，一般用于测试用
 * @type
 * @default
 * @example randomRgbColor()
 */
export declare const randomRgbColor: () => string;
/**
 * @description rgb的颜色值转为Hex颜色值
 * @type
 * @default
 * @example colorRgbToHex('rgb(255,255,255)') => #ffffff
 */
export declare const colorRgbToHex: (rgb: string) => string;
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
/**
 * @description 金额逗号分隔
 * @type
 * @default
 * @example 1314520.86 => 1,314,520.86
 */
export declare const formatPrice: (number?: number) => string | undefined;
/**
 * @description: 通过文件地址下载文件
 * @param {*} href 下载路径
 * @param {*} fileName 文件名
 */
export declare const fileDownload: (href: string, fileName: string) => boolean;
/**
 * @description: 强制修改稿响应头下载文件
 * @param {*} url 下载路径
 * @param {*} fileName 文件名
 */
export declare const fileDownloadByType: (url: string, fileName: string) => void;
/**
 * @description: 通过后端接口下载文件
 * @param {*} filename 文件名
 * @param {*} blobContent 后端返回二进制流数据
 * @param {*} type 文件类型
 *
 */
export declare const fileDownloadByRes: (filename: string, blobContent: any, type?: string) => void;
/**
 * @description: 滑滚动页面到顶部
 */
export declare const scrollToTop: () => void;
/**
 * @description: 滚动到页面底部
 */
export declare const scrollToBottom: () => void;
/**
 * @description: 根据开始年和结束年获取之间的所有日期(包含开始和结束)
 * @example getBetweenYears(2019, 2024) => [2019, 2020, 2021, 2022, 2023, 2024]
 */
export declare function getBetweenYears(startYear: number, endYear: number): any[];
/**
 * @description: 函数睡眠
 */
export declare const sleep: (time?: number, fn?: () => void) => Promise<unknown>;
/**
 * @description: 获取文件的后缀名
 * @param {*} filename
 */
export declare const getExt: (filename: string) => string;
/**
 * @description: 判断浏览器内核
 */
export declare const checkBrowser: () => {
    type: any;
    version: number;
};
/**
 * @description: 获取随机字符串  len为字符串长度
 * @param {*} len
 */
export declare const randomString: (len: number) => string;
/**
 * @description: 生成指定范围随机数
 * @param {*} min
 * @param {*} max
 */
export declare const randomRange: (min: number, max: number) => number;
/**
 * @description: 数组中获取随机数
 * @param {*} arr
 */
export declare const randomNum: (arr: any[]) => any;
/**
 * @description: 根据递归数组获取映射的路径
 * @param {*} array 要被递归的数组
 * @param {*} parentSubjectCode，目标
 * @param {*} period 对哪个字段进行映射，默认为value
 * @example [
    {
      value: "a",
      children: [
        {
          value: "g4",
          label: '3',
          children: [
          {
            value: 'yy'
          }
      ]}],
    }] ====> ['a', 'g4', 'yy']
 */
export declare const findParentNodeArray: (array: (string)[], parentSubjectCode: string, period?: string) => string[];
export declare const hasDuplicates: (arr: any[]) => boolean;
/**
 * 手机号码*加密函数
 * @param {string} phone 电话号
 * @returns
 */
export declare const phoneEncryption: (phone: string) => string;
/**
 * 格式化价格数额为字符串
 * 可对小数部分进行填充，默认不填充
 * @param price 价格数额，以分为单位!
 * @param fill 是否填充小数部分 0-不填充 1-填充第一位小数 2-填充两位小数
 */
export declare const priceFormat: (price: number, fill?: number) => string | number;
/**
 * 格式化文件大小，将字节转换为 KB、MB、GB 或 TB。
 * @param {number} sizeInBytes - 文件大小，以字节为单位
 * @returns {string} 格式化后的文件大小，包括单位
 * @example formatFileSize(123456789) => 117.74 MB
 */
export declare const formatFileSize: (sizeInBytes: number) => string;
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
export declare const convertFileSize: (size: number, fromUnit: string, toUnit: string, decimalPoint?: number) => string;
//# sourceMappingURL=index.d.ts.map