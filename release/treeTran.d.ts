interface TreeProps {
    id: string;
    name: string;
    children?: TreeProps[];
    [key: string]: any;
}
interface TreeNodeProps {
    id: string;
    name: string;
    [key: string]: any;
}
type ConditionFunction = (node: TreeProps) => boolean;
/**
 * @description: 根据递归树形菜单和目标值，获取从根节点到目标节点的路径
 * @param {*} list 要被递归的数组
 * @param {*} parentSubjectCode，要找到的目标的值，比如下面例子中的 'yy' 设置为目标值
 * @param {*} period 对哪个字段进行映射，默认为value，非必填
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
export declare const findParentNodeList: (list: string[], parentSubjectCode: string, period?: string) => string[];
/**
 * @description: 树形菜单转为铺平为数组，并为每个节点添加层级和父节点信息
 * @param {*} tree 要被处理的树形菜单
 * @param {*} result 存储结果的数组 非必填
 * @param {*} level 对哪个字段进行映射，默认为value 非必填
 * @param {*} parent 对哪个字段进行映射，默认为value 非必填
 * @example
 **/
export declare const treeToList: (tree: Array<TreeProps> | undefined, result: Array<TreeProps> | undefined, level: number | undefined, parent: TreeProps) => TreeProps[];
/**
 * @description: 数组转为树形菜单，记住了，每个节点需包含id和parentId字段，也就是父子节点相连的信息
 * @param {*} list 要被处理的数组
 * @param {*} parentId 根节点的parentId，默认为null，这个值会根据你实际的情况而变化
 **/
export declare const listToTree: (list?: Array<TreeNodeProps>, parentId?: null) => any[];
/**
 * @description: 精准查找想要的某节点字段的信息，并返回该节点
 * @param {*} tree 要被处理的树形菜单
 * @param {*} targetName 想要查找的目标值
 * @param {*} period 对哪个字段进行映射，默认为name 非必填
 **/
export declare const findNodeInTree: (tree: TreeNodeProps[], targetName: any, period?: string) => TreeNodeProps | null;
/**
 * @description: 根据条件，精准找到想要的某节点字段的信息，并返回该节点
 * @param {*} tree 要被处理的树形菜单
 * @param {*} condition 想要查找的条件
 * @example: (node) => node.name === 'test'
 **/
export declare const findNodeInTreeByCondition: (tree: Array<TreeNodeProps>, condition: ConditionFunction) => TreeNodeProps | null;
/**
 * @description: 根据条件，查找所有满足条件的节点，并返回一个集合
 * @param {*} tree 要被处理的树形菜单
 * @param {*} condition 想要查找的条件
 * @example:
 **/
export declare const findNodesInTreeByCondition: (tree: TreeProps, condition: ConditionFunction) => TreeNodeProps[];
export {};
//# sourceMappingURL=treeTran.d.ts.map