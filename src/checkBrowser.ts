export type DeviceType = "Mobile" | "PC" | "Unknown";
export type BrowserType = "IE" | "Edge" | "Firefox" | "Chrome" | "Opera" | "Safari" | "Unknown";

export interface BrowserInfo {
  type: BrowserType;
  version: number;
}

const currentUserAgent = (): string => {
  return typeof navigator === "undefined" ? "" : navigator.userAgent;
};

/** 根据 User-Agent 判断设备大类。 */
export const detectDeviceType = (userAgent = currentUserAgent()): DeviceType => {
  if (/mobile|android|iphone|ipad|ipod|windows phone|blackberry|webos|opera mini|iemobile|wpdesktop/i.test(userAgent)) {
    return "Mobile";
  }
  if (/windows|macintosh|linux|unix/i.test(userAgent)) return "PC";
  return "Unknown";
};

/** 根据 User-Agent 判断浏览器及其主版本。 */
export const checkBrowser = (userAgent = currentUserAgent()): BrowserInfo => {
  const rules: Array<[BrowserType, RegExp]> = [
    ["IE", /msie\s([\d.]+)/i],
    ["IE", /trident\/.+?rv:([\d.]+)/i],
    ["Edge", /(?:edg|edge)\/([\d.]+)/i],
    ["Opera", /(?:opr|opera)[/ ]([\d.]+)/i],
    ["Firefox", /firefox\/([\d.]+)/i],
    ["Chrome", /(?:chrome|crios)\/([\d.]+)/i],
    ["Safari", /version\/([\d.]+).+safari/i],
  ];

  for (const [type, pattern] of rules) {
    const match = pattern.exec(userAgent);
    if (match) return { type, version: Number.parseFloat(match[1]) };
  }
  return { type: "Unknown", version: -1 };
};
