/**
 * @description rgba的颜色值转为Hex颜色值
 * @type
 * @default
 * @example colorRgbaToHex('rgb(255,255,255)') => #ffffff
 */
export const colorRgbaToHex = (rgba: string) => {
    if (!rgba.includes("rgba")) {
        throw new Error('必需包含rgba');
    }
    // 将 rgba 颜色值分割为 r、g、b 和 a 的值
    const [r, g, b, a] = rgba.split(",").map(Number);
    // 将 r、g、b 值转换为十六进制字符串
    const hex = "#" + ((((1 << 24) + r) << (16 + g)) << (8 + b)).toString(16).slice(1);
    return hex;
};

/**
 * @description rgba的颜色值转为Hex颜色值
 * @type
 * @default
 * @example colorHexToRgb('#ffffff') => rgb(255,255,255)
 */
export const colorHexToRgb = (hex: string) => {
    if (hex.length !== 7 || hex.charAt(0) !== "#") {
        throw new Error('必需包含#, 且长度为7位的字符');
    };
    // 转为6位的16进制 0xcc00ff
    let newHex = hex.replace("#", "0x") as any,
        r = newHex >> 16,
        g = (newHex >> 8) & 0xff,
        b = newHex & 0xff;
    return `rgb(${r}, ${g}, ${b})`;
};


  /**
 * @description rgba的颜色值转为Hex颜色值
 * @type
 * @default
 * @example colorHexToRgb('#ffffff', 1) => rgb(255,255,255, 1)
 */
export const colorHexToRgba = (hex: string, alpha = 1) => {
    if (hex.length !== 7 || hex.charAt(0) !== "#") {
        throw new Error('必需包含#, 且长度为7位的字符');
    };
    // 去除十六进制颜色值的 '#' 符号
    const hexValue = hex.slice(1);
    // 将十六进制颜色值转换为整数
    const r = parseInt(hexValue.substring(0, 2), 16) << 16;
    const g = parseInt(hexValue.substring(2, 4), 16) << 8;
    const b = parseInt(hexValue.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};