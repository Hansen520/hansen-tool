/**
 * @description: 根据递归树形菜单和目标值，获取从根节点到目标节点的路径
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
export declare const findParentNodeArray: (array: string[], parentSubjectCode: string, period?: string) => string[];
//# sourceMappingURL=treeTran.d.ts.map