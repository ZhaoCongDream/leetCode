/*
 * @Date: 2022-04-13 15:10:35
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-04-13 17:58:22
 * @FilePath: /leetCode/树/重建二叉树/reConstructorBinaryTree.ts
 */

import { TreeNode } from "../tree";

export const reConstructorBinaryTree = (
  pre: number[],
  mid: number[]
): TreeNode<number> | null => {
  if (pre.length === 0) {
    return null;
  }
  if (pre.length === 1) {
    return new TreeNode(pre[0]);
  }
  // 先序遍历的第一个就是根节点
  const root = pre[0];
  // 根据根节点从中序遍历中获取 左子树 和 右子树
  const index = mid.findIndex((e) => e === root);
  const midLeft = mid.slice(0, index);
  const midRight = mid.slice(index + 1);
  // 根据中序遍历中的 index 在先序遍历中遍历 左子树和右子树
  const preLeft = pre.slice(1, index+1);
  const preRight = pre.slice(index + 1);
  // 递归继续上面的操作就可以了
  const left = reConstructorBinaryTree(preLeft, midLeft);
  const right = reConstructorBinaryTree(preRight, midRight);
  return new TreeNode(root, left, right);
};


export const getHRD = (
  pre: string[],
  mid: string[]
): string | null => {
  if (pre.length === 0) {
    return '';
  }
  if (pre.length === 1) {
    return pre[0];
  }
  // 先序遍历的第一个就是根节点
  const root = pre[0];
  // 根据根节点从中序遍历中获取 左子树 和 右子树
  const index = mid.findIndex((e) => e === root);
  const midLeft = mid.slice(0, index);
  const midRight = mid.slice(index + 1);
  // 根据中序遍历中的 index 在先序遍历中遍历 左子树和右子树
  const preLeft = pre.slice(1, index+1);
  const preRight = pre.slice(index + 1);
  // 递归继续上面的操作就可以了
  const left = getHRD(preLeft, midLeft);
  const right = getHRD(preRight, midRight);
  return `${left}${right}${root}`
};
