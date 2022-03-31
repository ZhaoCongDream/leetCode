<!--
 * @Date: 2022-03-31 17:38:03
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-03-31 20:16:39
 * @FilePath: /leetCode/大数相加/README.md
-->

# 大数相加

给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

```typescript
示例 1：
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.

示例 2：
输入：l1 = [0], l2 = [0]
输出：[0]

示例 3：
输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]

```

[code](./index.ts)

```typescript
const sum = (...args: number[]) => {
  const num = args.reduce((a, b) => a + b);
  return num >= 10 ? [parseInt(num / 10 + ""), num % 10] : [0, num];
};
export const bigNumberSum = (l1: number[], l2: number[]) => {
  const result = [];
  let re = 0; // 记录进位
  while (l1.length > 0 || l2.length > 0) {
    const l1Value = l1.length === 0 ? 0 : l1.shift();
    const l2Value = l2.length === 0 ? 0 : l2.shift();
    const [sumRe, value] = sum(l1Value + l2Value + re);
    re = sumRe;
    result.push(value);
  }

  // 如果还有进位 那么加在队尾
  if (re > 0) {
    result.push(re);
  }

  return result;
};
```
[test](./index.test.ts)
```typescript
import { expect, test } from "@jest/globals";
import { bigNumberSum } from "./index";
test("bigNumberSum", () => {
  expect(bigNumberSum([2, 4, 3], [5, 6, 4])).toStrictEqual([7, 0, 8]);
  
  expect(bigNumberSum([0], [0])).toStrictEqual([0]);

  expect(bigNumberSum([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])).toStrictEqual([
    8, 9, 9, 9, 0, 0, 0, 1,
  ]);
});

```