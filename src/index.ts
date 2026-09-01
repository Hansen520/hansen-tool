import Storage from "./storage.js";
import { getBetweenYearsArr } from "./betweenYear.js";
import { detectDeviceType, checkBrowser } from "./checkBrowser.js";
import { colorRgbaToHex, colorHexToRgba, colorHexToRgb } from "./colorToTran.js"; // 颜色转换
import { convertFileSize, formatFileSize } from "./convertFileSize.js";
import { fileDownload, fileDownloadByRes, fileDownloadByType } from "./fileDownload.js";
import { formatPrice, convertCurrency } from "./formatPrice.js";
import { getExt } from "./getExt.js";
import { hasDuplicates } from "./hasDuplicates.js";
import { phoneEncryption } from "./phoneEncryption.js";
import { randomNum, randomRange, randomRgbColor, randomString } from "./randomValue.js";
import { scrollToBottom, scrollToTop } from "./scroll.js";
import { sleepFn, sleep } from "./sleep.js";
import { findParentNodeList, treeToList, listToTree, findNodeInTree, findNodeInTreeByCondition, findNodesInTreeByCondition } from "./treeTran.js";

export type { BrowserInfo, BrowserType, DeviceType } from "./checkBrowser.js";
export type { FileSizeUnit } from "./convertFileSize.js";
export type { JsonPrimitive, JsonValue } from "./storage.js";
export type { FlatTreeNode, FlattenedTreeNode, TreeCondition, TreeNode, TreeNodeId } from "./treeTran.js";

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
  fileDownload,
  fileDownloadByRes,
  fileDownloadByType,
  formatPrice,
  convertCurrency,
  getExt,
  hasDuplicates,
  phoneEncryption,
  randomNum,
  randomRange,
  randomRgbColor,
  randomString,
  scrollToBottom,
  scrollToTop,
  sleepFn,
  sleep,
  findParentNodeList,
  treeToList,
  listToTree,
  findNodeInTree,
  findNodeInTreeByCondition,
  findNodesInTreeByCondition
};
