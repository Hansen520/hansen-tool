export type TreeNodeId = string | number;

export interface TreeNode {
  children?: TreeNode[];
  [key: string]: unknown;
}

export interface FlatTreeNode extends TreeNode {
  id: TreeNodeId;
  parentId: TreeNodeId | null;
}

export interface FlattenedTreeNode extends TreeNode {
  level: number;
  parent?: FlattenedTreeNode;
}

export type TreeCondition = (node: TreeNode) => boolean;

function assertTreeArray(tree: unknown, name = "tree"): asserts tree is TreeNode[] {
  if (!Array.isArray(tree)) throw new TypeError(`${name} must be an array`);
}

const getChildren = (node: TreeNode): TreeNode[] => {
  if (node.children === undefined) return [];
  if (!Array.isArray(node.children)) throw new TypeError("node.children must be an array");
  return node.children;
};

/** 查找从根节点到目标值的字段路径，未找到时返回空数组。 */
export const findParentNodeList = (
  list: TreeNode[],
  targetValue: unknown,
  field = "value",
): unknown[] => {
  assertTreeArray(list, "list");
  const path: TreeNode[] = [];
  const visiting = new Set<TreeNode>();

  const visit = (nodes: TreeNode[]): boolean => {
    for (const node of nodes) {
      if (visiting.has(node)) throw new Error("tree cannot contain cycles");
      visiting.add(node);
      path.push(node);
      if (node[field] === targetValue || visit(getChildren(node))) return true;
      path.pop();
      visiting.delete(node);
    }
    return false;
  };

  return visit(list) ? path.map((node) => node[field]) : [];
};

/** 将树形菜单铺平，并为每个节点添加 level 和 parent。 */
export const treeToList = (
  tree: TreeNode[] = [],
  result: FlattenedTreeNode[] = [],
  level = 0,
  parent?: FlattenedTreeNode,
): FlattenedTreeNode[] => {
  assertTreeArray(tree);
  if (!Array.isArray(result)) throw new TypeError("result must be an array");
  if (!Number.isSafeInteger(level) || level < 0) {
    throw new RangeError("level must be a non-negative safe integer");
  }

  const visiting = new Set<TreeNode>();
  const flatten = (nodes: TreeNode[], currentLevel: number, currentParent?: FlattenedTreeNode): void => {
    for (const node of nodes) {
      if (visiting.has(node)) throw new Error("tree cannot contain cycles");
      visiting.add(node);
      const flattened: FlattenedTreeNode = { ...node, level: currentLevel, parent: currentParent };
      result.push(flattened);
      flatten(getChildren(node), currentLevel + 1, flattened);
      visiting.delete(node);
    }
  };

  flatten(tree, level, parent);
  return result;
};

/** 根据 id 和 parentId 将平铺数组转换为树。 */
export const listToTree = <T extends FlatTreeNode>(
  list: readonly T[] = [],
  rootParentId: TreeNodeId | null = null,
): Array<T & { children: T[] }> => {
  if (!Array.isArray(list)) throw new TypeError("list must be an array");

  const nodes = new Map<TreeNodeId, T & { children: T[] }>();
  for (const item of list) {
    if (nodes.has(item.id)) throw new Error(`duplicate node id: ${String(item.id)}`);
    nodes.set(item.id, { ...item, children: [] });
  }

  for (const item of list) {
    const seen = new Set<TreeNodeId>([item.id]);
    let current = item;
    while (!Object.is(current.parentId, rootParentId)) {
      if (seen.has(current.parentId)) throw new Error("list cannot contain parent cycles");
      seen.add(current.parentId);
      const parent = nodes.get(current.parentId);
      if (!parent) throw new Error(`parent node not found: ${String(current.parentId)}`);
      current = parent;
    }
  }

  const roots: Array<T & { children: T[] }> = [];
  for (const item of list) {
    const node = nodes.get(item.id)!;
    if (Object.is(item.parentId, rootParentId)) {
      roots.push(node);
    } else {
      nodes.get(item.parentId)!.children.push(node);
    }
  }
  return roots;
};

/** 按指定字段查找第一个匹配节点。 */
export const findNodeInTree = (
  tree: TreeNode[],
  targetValue: unknown,
  field = "name",
): TreeNode | null => {
  assertTreeArray(tree);
  const stack = [...tree].reverse();
  const visited = new Set<TreeNode>();
  while (stack.length > 0) {
    const node = stack.pop()!;
    if (visited.has(node)) throw new Error("tree cannot contain cycles");
    visited.add(node);
    if (node[field] === targetValue) return node;
    stack.push(...getChildren(node).slice().reverse());
  }
  return null;
};

/** 根据条件查找第一个匹配节点。 */
export const findNodeInTreeByCondition = (
  tree: TreeNode[],
  condition: TreeCondition,
): TreeNode | null => {
  assertTreeArray(tree);
  if (typeof condition !== "function") throw new TypeError("condition must be a function");
  const stack = [...tree].reverse();
  const visited = new Set<TreeNode>();
  while (stack.length > 0) {
    const node = stack.pop()!;
    if (visited.has(node)) throw new Error("tree cannot contain cycles");
    visited.add(node);
    if (condition(node)) return node;
    stack.push(...getChildren(node).slice().reverse());
  }
  return null;
};

/** 根据条件查找所有匹配节点，支持单个根节点或根节点数组。 */
export const findNodesInTreeByCondition = (
  tree: TreeNode | TreeNode[],
  condition: TreeCondition,
): TreeNode[] => {
  if (typeof condition !== "function") throw new TypeError("condition must be a function");
  const stack = (Array.isArray(tree) ? tree : [tree]).slice().reverse();
  const result: TreeNode[] = [];
  const visited = new Set<TreeNode>();
  while (stack.length > 0) {
    const node = stack.pop()!;
    if (visited.has(node)) throw new Error("tree cannot contain cycles");
    visited.add(node);
    if (condition(node)) result.push(node);
    stack.push(...getChildren(node).slice().reverse());
  }
  return result;
};
