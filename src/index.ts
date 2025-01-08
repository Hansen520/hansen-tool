import Storage from "./storage.js";
import { getBetweenYearsArr } from "./betweenYear.js";
import { detectDeviceType, checkBrowser } from "./checkBrowser.js";
import { colorRgbaToHex, colorHexToRgba, colorHexToRgb } from "./colorToTran.js"; // 颜色转换
import { send } from "./concurrencySend.js"; // 并发请求
import { convertFileSize, formatFileSize } from "./convertFileSize.js";
import { fileDownload, fileDownloadByRes, fileDownloadByType } from "./fileDownload.js";
import { formatPrice, priceFormat } from "./formatPrice.js";
import { getExt } from "./getExt.js";
import { hasDuplicates } from "./hasDuplicates.js";
import { phoneEncryption } from "./phoneEncryption.js";
import { randomNum, randomRange, randomRgbColor, randomString } from "./randomValue.js";
import { scrollToBottom, scrollToTop } from "./scroll.js";
import { sleep } from "./sleep.js";
import { findParentNodeArray } from "./treeTran.js";

export {
  Storage,
  getBetweenYearsArr,
  detectDeviceType,
  checkBrowser,
  convertFileSize,
  formatFileSize,
  colorRgbaToHex,
  colorHexToRgba,
  colorHexToRgb,
  send,
  fileDownload,
  fileDownloadByRes,
  fileDownloadByType,
  formatPrice,
  priceFormat,
  getExt,
  hasDuplicates,
  phoneEncryption,
  randomNum,
  randomRange,
  randomRgbColor,
  randomString,
  scrollToBottom,
  scrollToTop,
  sleep,
  findParentNodeArray
};
