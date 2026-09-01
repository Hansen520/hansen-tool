/** 获取文件名或 URL 的扩展名，不包含点号。 */
export const getExt = (filename: string): string => {
  const cleanName = filename.split(/[?#]/, 1)[0].replace(/\\/g, "/").split("/").pop() ?? "";
  const lastDot = cleanName.lastIndexOf(".");
  if (lastDot <= 0 || lastDot === cleanName.length - 1) return "";
  return cleanName.slice(lastDot + 1).toLowerCase();
};
