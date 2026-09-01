import {
  findNodeInTree,
  findNodeInTreeByCondition,
  findNodesInTreeByCondition,
  findParentNodeList,
  listToTree,
  treeToList,
  type TreeNode,
} from "../treeTran.ts";

const tree: TreeNode[] = [{
  id: 1,
  name: "root",
  value: "a",
  children: [{ id: 2, name: "branch", value: "b", children: [{ id: 3, name: "leaf", value: "c" }] }],
}];

describe("tree utilities", () => {
  test("finds deep nodes and paths", () => {
    expect(findNodeInTree(tree, "leaf")?.id).toBe(3);
    expect(findNodeInTreeByCondition(tree, (node) => node.id === 2)?.name).toBe("branch");
    expect(findParentNodeList(tree, "c")).toEqual(["a", "b", "c"]);
    expect(findNodesInTreeByCondition(tree, (node) => Number(node.id) >= 2)).toHaveLength(2);
  });

  test("flattens and rebuilds trees without mutating inputs", () => {
    const flat = treeToList(tree);
    expect(flat.map(({ id, level }) => [id, level])).toEqual([[1, 0], [2, 1], [3, 2]]);
    expect(flat[1].parent?.id).toBe(1);

    const list = [{ id: 1, parentId: null, name: "root" }, { id: 2, parentId: 1, name: "child" }];
    expect(listToTree(list)[0].children[0].name).toBe("child");
    expect(list[0]).not.toHaveProperty("children");
  });

  test("rejects invalid flat tree structures", () => {
    expect(() => listToTree([{ id: 1, parentId: 9 }])).toThrow("parent node not found");
    expect(() => listToTree([{ id: 1, parentId: 2 }, { id: 2, parentId: 1 }])).toThrow("parent cycles");
    expect(() => listToTree([{ id: 1, parentId: null }, { id: 1, parentId: null }])).toThrow("duplicate node id");
  });
});
