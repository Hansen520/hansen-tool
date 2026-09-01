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
/** 查找从根节点到目标值的字段路径，未找到时返回空数组。 */
export declare const findParentNodeList: (list: TreeNode[], targetValue: unknown, field?: string) => unknown[];
/** 将树形菜单铺平，并为每个节点添加 level 和 parent。 */
export declare const treeToList: (tree?: TreeNode[], result?: FlattenedTreeNode[], level?: number, parent?: FlattenedTreeNode) => FlattenedTreeNode[];
/** 根据 id 和 parentId 将平铺数组转换为树。 */
export declare const listToTree: <T extends FlatTreeNode>(list?: readonly T[], rootParentId?: TreeNodeId | null) => Array<T & {
    children: T[];
}>;
/** 按指定字段查找第一个匹配节点。 */
export declare const findNodeInTree: (tree: TreeNode[], targetValue: unknown, field?: string) => TreeNode | null;
/** 根据条件查找第一个匹配节点。 */
export declare const findNodeInTreeByCondition: (tree: TreeNode[], condition: TreeCondition) => TreeNode | null;
/** 根据条件查找所有匹配节点，支持单个根节点或根节点数组。 */
export declare const findNodesInTreeByCondition: (tree: TreeNode | TreeNode[], condition: TreeCondition) => TreeNode[];
//# sourceMappingURL=treeTran.d.ts.map