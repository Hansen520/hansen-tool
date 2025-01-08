/*
 * @Date: 2025-01-08 13:57:01
 * @Description: description
 */
/**
 * @description: 滑滚动页面到顶部
 */
export const scrollToTop = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, scrollTop - scrollTop / 8);
    }
  };
  
  /**
   * @description: 滚动到页面底部
   */
  export const scrollToBottom = () => {
    window.scrollTo(0, document.documentElement.clientHeight);
  };