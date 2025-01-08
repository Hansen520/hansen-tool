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
 * @description: 通过后端流文件形式接口下载文件
 * @param {*} filename 文件名
 * @param {*} blobContent 后端返回二进制流数据
 * @param {*} type 文件类型
 *
 */
export declare const fileDownloadByRes: (filename: string, blobContent: any, type?: string) => void;
//# sourceMappingURL=fileDownload.d.ts.map