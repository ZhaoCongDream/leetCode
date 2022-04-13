/*
 * @Date: 2022-04-01 11:00:49
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-04-13 17:04:13
 * @FilePath: /leetCode/树/tree.ts
 */
export class TreeNode<T> {
  data: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  constructor(
    data: T,
    left: TreeNode<T> | null = null,
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
 export class Tree<T> {
  root: TreeNode<T> | null = null;
  insert(data: T) {
    const node = new TreeNode(data, null, null);
    if (!this.root) {
      this.root = node;
      return;
    }
    // current 指向根节点
    let current: null | TreeNode<T> = this.root;
    // parent
    let parent = null;
    while (current) {
      // 使用 parent 记录当前节点
      parent = current;
      if (data < parent.data) {
        // 查看当前节点的 left 是不是等于空。
        // 空就插入,非空指向 left 节点。
        // 继续比较大小。
        current = current.left;
        if (!current) {
          parent.left = node;
          return;
        }
      } else {
        // 查看当前节点的 right 是不是等于空。
        // 空就插入,非空指向 right 节点。
        // 继续比较大小。
        current = current.right;
        if (!current) {
          parent.right = node;
          return;
        }
      }
    }
  }
  // 前序 root->left->right
  preOrder(node: TreeNode<T> | null) {
    if (node) {
      // 先访问根节点
      node.onShow();
      // 再访问left节点
      this.preOrder(node.left);
      // 最后访问right节点
      this.preOrder(node.right);
    }
  }
  // 中序 left->root->right
  middleOrder(node: TreeNode<T> | null) {
    if (node) {
      // 访问left节点
      this.preOrder(node.left);
      // 访问根节点
      node.onShow();
      // 访问right节点
      this.preOrder(node.right);
    }
  }
  // 后序 left->right->root
  laterOrder(node: TreeNode<T> | null) {
    if (node) {
      // 访问left节点
      this.preOrder(node.left);
      // 问right节点
      this.preOrder(node.right);
      // 访问根节点
      node.onShow();
    }
  }
  // 树最小值
  getMin(node: TreeNode<T> | null):null|T {
    // 理论上来讲只需要顺着left一直找就能找到最小的值
    if (node) {
      return node.left ? this.getMin(node.left) : node.data;
    }
    return null;
  }
  // 树最大值
  getMax(node: TreeNode<T> | null):null|T {
    // 理论上来讲只需要顺着right一直找就能找到最大的值
    if (node) {
      return node.right ? this.getMin(node.right) : node.data;
    }
    return null;
  }
  // 深度
  getDeep(node: TreeNode<T> | null): number {
    const current = node;
    // 递归查一下就可以了
    if (current) {
      return Math.max(
        1 + this.getDeep(current.left),
        1 + this.getDeep(current.right)
      );
    }
    return 0;
  }
}