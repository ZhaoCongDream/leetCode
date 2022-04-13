/*
 * @Date: 2022-04-13 20:09:31
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-04-13 20:15:15
 * @FilePath: /leetCode/树/对称二叉树/Mirror.ts
 */
import { TreeNode } from "../tree";
export function Mirror(root: TreeNode<number>) {
  if(root){
    [root.left,root.right] = [root.right,root.left]
    Mirror(root.left)
    Mirror(root.right)
  }
}
