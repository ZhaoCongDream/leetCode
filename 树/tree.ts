/*
 * @Date: 2022-04-01 11:00:49
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-04-01 14:12:20
 * @FilePath: /leetCode/树/tree.ts
 */
class TreeNode<T> {
  data: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  constrictor(
    data: T,
    left: TreeNode<T> = null,
    right: TreeNode<T> | null = null
  ) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  onShow() {
    console.log(this.data);
  }
}
class Tree<T> {
  root: TreeNode<T> | null;
  insert(node:TreeNode<T>) {
    
  }
  // 前序
  preOrder() {
    
  }
  // 中序
  middleOrder() {

  }
  // 后序
  laterOrder() {

  }
  // 树最小值
  getMin() {

  }
  // 树最大值
  getMax() {

  }
  // 深度
  getDeep() {

  }
}
