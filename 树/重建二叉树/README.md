<!--
 * @Date: 2022-04-13 15:11:01
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-04-13 17:45:59
 * @FilePath: /leetCode/树/重建二叉树/README.md
-->
### 重建二叉树
输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

[code](./reConstructorBinaryTree.ts)
```javascript
/* 
input: 
pre:{1,2,4,7,3,5,6,8}
mid:{4,7,2,1,5,3,8,6}
output:
tree:{
  value:1,
  left:{
    value:2,
    left
  }
}
*/

const reConstructorBinaryTree = (
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

```
### 生成后序遍历
给定一棵二叉树的前序遍历和中序遍历，求其后序遍历

[code](./reConstructorBinaryTree.ts)
```javascript
// test1
// pre:'ABC'
// mid:'BAC'
// put:'BCA'
// test2
// pre:'FDXEAG'
// mid:'XDEFAG'
// put:'XEDGAF'

// 和上面的思路一样,只需要在return处作出修改就可以了,
export const getHRD = (
  pre: string[],
  mid: string[]
): string | null => {
...

return `${left}${right}${root}`
...
}
```