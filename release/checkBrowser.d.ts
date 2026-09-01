export type DeviceType = "Mobile" | "PC" | "Unknown";
export type BrowserType = "IE" | "Edge" | "Firefox" | "Chrome" | "Opera" | "Safari" | "Unknown";
export interface BrowserInfo {
    type: BrowserType;
    version: number;
}
/** 根据 User-Agent 判断设备大类。 */
export declare const detectDeviceType: (userAgent?: string) => DeviceType;
/** 根据 User-Agent 判断浏览器及其主版本。 */
export declare const checkBrowser: (userAgent?: string) => BrowserInfo;
//# sourceMappingURL=checkBrowser.d.ts.map