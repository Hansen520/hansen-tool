import { isArray, uniq } from "lodash-es";
/**
 * @description: 根据递归数组获取映射的路径
 * @param {*} array 要被递归的数组
 * @param {*} parentSubjectCode，目标
 * @param {*} period 对哪个字段进行映射，默认为value
 * @example [
    {
      value: "a",
      children: [
        {
          value: "g4",
          label: '3',
          children: [
          {
            value: 'yy'
          }
      ]}],
    }] ====> ['a', 'g4', 'yy']
 */
export const findParentNodeArray = (array: string[], parentSubjectCode: string, period: string = "value") => {
  if (!isArray(array)) {
    throw "传入的为非数组，请重新传入";
  }
  const parentSubjectStock: string[] = []; // 存储父节点
  let going = true; // 是否已找到要查到的节点
  const findParentNode = function (array: string[], code: string) {
    array.forEach((item: any) => {
      if (!going) {
        return;
      }
      parentSubjectStock.push(item);
      if (item[period] === code) {
        going = false;
      } else if (item.children) {
        findParentNode(item.children, code);
      } else {
        parentSubjectStock.pop();
      }
    });
    if (going) parentSubjectStock.pop();
  };
  findParentNode(array, parentSubjectCode);
  return parentSubjectStock.map((item) => item[period as any]);
};
