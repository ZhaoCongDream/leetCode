/*
 * @Date: 2022-04-13 19:43:33
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-04-13 20:14:09
 * @FilePath: /leetCode/树/对称二叉树/isSymmetrical.ts
 */
import { TreeNode } from "../tree";
export function isSymmetrical(root: TreeNode<number>): boolean {
  return isSymmetricalTree(root.left, root.right);
}
function isSymmetricalTree(l: TreeNode<number>, r: TreeNode<number>) {
  return (
    l?.data === r?.data &&
    isSymmetricalTree(l.left, r.right) &&
    isSymmetricalTree(l.right, r.left)
  );
}
