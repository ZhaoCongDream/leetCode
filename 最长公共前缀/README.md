<!--
 * @Date: 2022-03-31 16:16:14
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-03-31 17:20:42
 * @FilePath: /leetCode/最长公共前缀/README.md
-->

### 题目描述

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。
[code](./index.ts)

```typescript
export const longestCommonPrefix = (strList: string[]) => {
  if (strList.length < 2) return strList[0];
  let str = strList.shift();
  for (let i = 0; i < strList.length && str.length > 0; i++) {
    const element = strList[i];
    for (let j = 0; j < str.length; j++) {
      if (str.slice(0, j) !== element.slice(0, j)) {
        str = str.slice(0, j - 1);
        break;
      }
    }
  }
  return str;
};
```

[test](./index.test.ts)

```typescript
//All Pass
test("test", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
});
```
