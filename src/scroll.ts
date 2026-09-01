const assertBrowser = (): void => {
  if (typeof window === "undefined" || typeof document === "undefined") {
    throw new Error("scroll utilities are only available in a browser environment");
  }
};

/** 平滑滚动到页面顶部。 */
export const scrollToTop = (): void => {
  assertBrowser();
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop <= 0) return;

  const nextPosition = scrollTop < 1 ? 0 : Math.max(0, scrollTop - scrollTop / 8);
  window.scrollTo(0, nextPosition);
  if (nextPosition > 0) window.requestAnimationFrame(scrollToTop);
};

/** 滚动到页面内容底部。 */
export const scrollToBottom = (): void => {
  assertBrowser();
  const documentElement = document.documentElement;
  const body = document.body;
  const bottom = Math.max(documentElement.scrollHeight, body.scrollHeight) - window.innerHeight;
  window.scrollTo(0, Math.max(0, bottom));
};
