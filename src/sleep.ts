/*
 * @Date: 2025-01-08 11:22:24
 * @Description: 函数睡眠
 */
/**
 * @description: 对某一个函数延迟执行, 异步
 * @param {*} time 延迟时间
 */
export const sleepFn = (time = 500, fn?: () => void) => {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      fn && typeof fn === "function" && fn();
      resolve(true);
    }, time);
  });
};

/**
 * @description: 直接延迟睡眠，异步
 * @param {*} ms 延迟时间
 */
export const sleep = (ms = 500) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}
