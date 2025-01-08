import { isArray, uniq } from "lodash-es";

/*
  @param {*} array 要被递归的数组
  @des: 判断数组内是否有元素重复，如果有返回true，没有返回false
*/
export const hasDuplicates = (arr: any[]) => {
  if (!isArray(arr)) {
    throw "请传入数组";
  }
  if (arr.length === 1) {
    return false;
  }
  // 就是去重后去与原数组进行比较罢了
  return uniq(arr).length !== arr.length;
};
