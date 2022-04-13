<!--
 * @Date: 2022-03-28 11:13:33
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-04-13 17:56:42
 * @FilePath: /leetCode/树/README.md
-->
# 树

### [基本实现](./tree.ts)
### 二叉树遍历
##### 中序遍历
##### 前序遍历
##### 后序遍历
```typescript
class TreeNode<T> {
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
class Tree<T> {
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

```
##### [重建二叉树](./%E9%87%8D%E5%BB%BA%E4%BA%8C%E5%8F%89%E6%A0%91/reConstructorBinaryTree.ts)
##### [求二叉树的遍历](./%E9%87%8D%E5%BB%BA%E4%BA%8C%E5%8F%89%E6%A0%91/reConstructorBinaryTree.ts#L36)
### 二叉树的对称性
##### 二叉树的镜像
##### 对称二叉树
### 二叉搜索树
##### 二叉树的后序遍历
##### 二叉搜索树的第K个节点
##### 二叉搜索树的后序遍历
### 二叉树的深度
##### 最大深度
##### 最小深度
##### 平衡二叉树