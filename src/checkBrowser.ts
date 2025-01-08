/**
 * @description: 设备的判断，判断是移动端还是PC端的用户
 * 最主要的是利用header头部的userAgent
 */
export const detectDeviceType = () => {
  const userAgent = navigator.userAgent.toLowerCase();

  // 检测是否为移动端
  if (/mobile|android|iphone|ipad|ipod|windows phone|blackberry|webos|opera mini|iemobile|wpdesktop/i.test(userAgent)) {
    return 'Mobile';
  }

  // 检测是否为PC端
  if (/windows|macintosh|linux|unix/i.test(userAgent)) {
    return 'PC';
  }

  // 如果不能确定，返回未知
  return 'Unknown';
}

/**
 * @description: 判断浏览器内核
 */
export const checkBrowser = () => {
  const t = (window as any).navigator.userAgent.toLowerCase();
  return t.indexOf("msie") >= 0
    ? {
        // ie < 11
        type: "IE",
        version: Number(t.match(/msie ([\d]+)/)[1]),
      }
    : t.match(/trident\/.+?rv:(([\d.]+))/)
    ? {
        // ie 11
        type: "IE",
        version: 11,
      }
    : t.indexOf("edge") >= 0
    ? {
        type: "Edge",
        version: Number(t.match(/edge\/([\d]+)/)[1]),
      }
    : t.indexOf("firefox") >= 0
    ? {
        type: "Firefox",
        version: Number(t.match(/firefox\/([\d]+)/)[1]),
      }
    : t.indexOf("chrome") >= 0
    ? {
        type: "Chrome",
        version: Number(t.match(/chrome\/([\d]+)/)[1]),
      }
    : t.indexOf("opera") >= 0
    ? {
        type: "Opera",
        version: Number(t.match(/opera.([\d]+)/)[1]),
      }
    : t.indexOf("Safari") >= 0
    ? {
        type: "Safari",
        version: Number(t.match(/version\/([\d]+)/)[1]),
      }
    : {
        type: t,
        version: -1,
      };
};