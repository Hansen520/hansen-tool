/** 通过文件地址触发浏览器下载。 */
export declare const fileDownload: (href: string, fileName?: string) => true;
/** 请求远程文件并触发下载，HTTP 错误会 reject。 */
export declare const fileDownloadByType: (url: string, fileName: string) => Promise<void>;
/** 将二进制内容转换为 Blob 并触发下载。 */
export declare const fileDownloadByRes: (filename: string, blobContent: BlobPart, type?: string) => void;
//# sourceMappingURL=fileDownload.d.ts.map