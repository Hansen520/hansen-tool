/*
 * @Date: 2025-01-08 11:22:24
 * @Description: 函数睡眠
 */
/**
 * @description: 函数睡眠
 */
export const sleep = (time = 10, fn?: () => void) => {
    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        fn && typeof fn === "function" && fn();
        resolve(true);
      }, time);
    });
  };
  