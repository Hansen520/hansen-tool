/**
 * @description: 设备的判断，判断是移动端还是PC端的用户
 * 最主要的是利用header头部的userAgent
 */
export declare const detectDeviceType: () => "Mobile" | "PC" | "Unknown";
/**
 * @description: 判断浏览器内核
 */
export declare const checkBrowser: () => {
    type: any;
    version: number;
};
//# sourceMappingURL=checkBrowser.d.ts.map