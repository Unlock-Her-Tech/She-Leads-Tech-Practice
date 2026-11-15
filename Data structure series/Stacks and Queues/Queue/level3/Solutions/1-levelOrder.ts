// 102. Binary Tree Level Order Traversal
// https://leetcode.com/problems/binary-tree-level-order-traversal/

// LeetCode provides TreeNode. This definition lets you build trees locally.
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * Use a queue to visit the tree one level at a time. Add children in
 * left-to-right order so the next level is already in the right order.
 *
 * Time O(n) and space O(n) for n nodes.
 */
export function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }

  const nodes = [root];
  const levels: number[][] = [];
  let head = 0;

  while (head < nodes.length) {
    // Children go beyond this boundary and are processed next time.
    const endOfLevel = nodes.length;
    const level: number[] = [];
    while (head < endOfLevel) {
      const node = nodes[head++];
      level.push(node.val);
      if (node.left !== null) {
        nodes.push(node.left);
      }
      if (node.right !== null) {
        nodes.push(node.right);
      }
    }
    levels.push(level);
  }
  return levels;
}

// Uncomment the example and run this file to see the output.
/*
const root = new TreeNode(3, new TreeNode(9), new TreeNode(20));
console.log(levelOrder(root)); // [[3], [9, 20]]
*/
