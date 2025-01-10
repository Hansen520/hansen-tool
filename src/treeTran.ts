import { isArray } from "lodash-es";

/* 树形结构数据类型定义 */
interface TreeProps {
  id: string;
  name: string;
  children?: TreeProps[];
  [key: string]: any;
}

/* 节点属性类型定义 */
interface TreeNodeProps {
  id: string;
  name: string;
  [key: string]: any;
}

/* 条件函数类型定义 */
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
export const findParentNodeList = (list: string[], parentSubjectCode: string, period: string = "value") => {
  if (!isArray(list)) {
    throw "传入的为非数组，请重新传入";
  }
  const parentSubjectStock: string[] = []; // 存储父节点
  let going = true; // 是否已找到要查到的节点
  const findParentNode = function (list: string[], code: string) {
    list.forEach((item: any) => {
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
  findParentNode(list, parentSubjectCode);
  return parentSubjectStock.map((item) => item[period as any]);
};

/**
 * @description: 树形菜单转为铺平为数组，并为每个节点添加层级和父节点信息
 * @param {*} tree 要被处理的树形菜单
 * @param {*} result 存储结果的数组 非必填
 * @param {*} level 对哪个字段进行映射，默认为value 非必填
 * @param {*} parent 对哪个字段进行映射，默认为value 非必填
 * @example 
 **/
export const treeToList = (
  tree: Array<TreeProps> = [],
  result: Array<TreeProps> = [],
  level = 0,
  parent: TreeProps
) => {
  if (!isArray(tree)) {
    throw new Error("Expected an array for the tree structure.");
  }

  tree.forEach((node) => {
    // 这里可以根据需要添加额外的属性，例如层级(level)和父节点(parent)
    const newNode = {
      ...node,
      level: level,
      parent: parent,
    };

    // 将当前节点添加到结果数组中
    result.push(newNode);

    // 如果当前节点有子节点，递归调用treeToList
    if (node.children && node.children.length > 0) {
      treeToList(node.children, result, level + 1, newNode);
    }
  });

  return result;
};

/**
 * @description: 数组转为树形菜单，记住了，每个节点需包含id和parentId字段，也就是父子节点相连的信息
 * @param {*} list 要被处理的数组
 * @param {*} parentId 根节点的parentId，默认为null，这个值会根据你实际的情况而变化
 **/
export const listToTree = (list: Array<TreeNodeProps> = [], parentId = null) => {
  if (!isArray(list)) {
    throw new Error("list must be an array");
  }

  const map = {} as TreeNodeProps;
  const roots = [];
  for (let i = 0; i < list.length; i++) {
    map[list[i].id] = { ...list[i], children: [] };
  }

  for (let i = 0; i < list.length; i++) {
    const mappedItem = map[list[i].id]; // ** 获取当前节点, 其实这边map已经将指针指向node了，所以后续的map[node.parentId].children里面推送后，map里面推进的值就也就在roots里面了
    if (list[i].parentId === parentId) {
      roots.push(mappedItem);
    } else {
      map[list[i].parentId].children.push(mappedItem);
    }
  }
  return roots;
};

/**
 * @description: 精准查找想要的某节点字段的信息，并返回该节点
 * @param {*} tree 要被处理的树形菜单
 * @param {*} targetName 想要查找的目标值
 * @param {*} period 对哪个字段进行映射，默认为name 非必填
 **/
export const findNodeInTree = (tree: TreeNodeProps[], targetName: any, period: string = "name"): TreeNodeProps | null => {
  for (const node of tree) {
    if (node[period] === targetName) {
      return node; // 找到匹配的节点，返回它
    }
    if (node.children) {
      const foundInChildren = findNodeInTree(node.children, period, targetName);
      if (foundInChildren) {
        // return node
        return foundInChildren; // 在子节点中找到匹配的节点，返回它
      }
    }
  }
  return null; // 如果没有找到匹配的节点，返回null
};

/**
 * @description: 根据条件，精准找到想要的某节点字段的信息，并返回该节点
 * @param {*} tree 要被处理的树形菜单
 * @param {*} condition 想要查找的条件
 * @example: (node) => node.name === 'test'
 **/
export const findNodeInTreeByCondition = (tree: Array<TreeNodeProps>, condition: ConditionFunction): TreeNodeProps | null => {
  for (const node of tree) {
    if (condition(node)) {
      return node; // 如果节点满足条件，返回该节点
    }
    if (node.children) {
      const foundInChildren = findNodeInTreeByCondition(node.children, condition);
      if (foundInChildren) {
        return foundInChildren; // 如果在子节点中找到满足条件的节点，返回该节点
      }
    }
  }
  return null; // 如果没有找到满足条件的节点，返回null
};


/**
 * @description: 根据条件，查找所有满足条件的节点，并返回一个集合
 * @param {*} tree 要被处理的树形菜单
 * @param {*} condition 想要查找的条件
 * @example: 
 **/
export const findNodesInTreeByCondition = (tree: TreeProps,  condition: ConditionFunction) => {
  const result = [] as TreeNodeProps[]; // 用于存储符合条件的节点

  const traverse = (node: TreeNodeProps) => {
    // 判断是否符合搜索值得条件
    if (condition(node)) {
      result.push(node); // 如果节点满⾜条件，将其添加到结果数组
    }
    for (const child of node.children) {
      traverse(child); // 递归遍历每个子节点
    }
  }

  traverse(tree); // 从根节点开始遍历
  return result; // 返回所有符合条件的节点
}
