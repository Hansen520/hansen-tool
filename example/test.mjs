import { treeToArray } from "../release/index.esm.js";
const tree = [
  {
    id: 1,
    name: "节点1",
    children: [
      {
        id: 2,
        name: "节点1-1",
        children: [
          {
            id: 4,
            name: "节点1-1-1",
          },
        ],
      },
      {
        id: 3,
        name: "节点1-2",
      },
    ],
  },
];

const result = treeToArray(tree);
console.log(typeof result, result);
