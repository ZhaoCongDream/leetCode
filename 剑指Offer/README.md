<!--
 * @Date: 2022-03-31 23:38:17
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-04-01 00:32:46
 * @FilePath: /leetCode/剑指Offer/README.md
-->

### [判断一个字符串是否有重复单词](./isUnique.ts)

```typescript
// 使用 set 比较长度
const isUniqueSet = (astr: string) => {
  return new Set(astr).size === astr.length;
};

// 先排序 然后循环判断当前元素和下一个元素是否相同
const isUniqueLoop = (astr: string) => {
  return astr
    .split("")
    .sort()
    .some((v, i, s) => v === s(i + 1));
};

// 使用位运算 ,通过位运算构建一个hash的长度为26的数字 每一位对应一个 1 或 0
// 比如 "abcz"就会对应 10000000000000000000000111
// 然后使用 & 比较 有重复的就会是 1 & 1
const isUniqueBit = (astr: string) => {
  let mask = 0;
  for (let char of astr) {
    // 计算当前字符到 a 的距离
    let bit = char.charCodeAt(0) - "a".charCodeAt(0);
    if ((mask & (1 << bit)) !== 0) {
      return false;
    } else {
      mask = mask | (1 << bit);
    }
  }
  return true;
};
```

### [判断是否互为字符重排](./CheckPermutation.ts)

```typescript
// 示例
输入: (s1 = "abc"), (s2 = "bca");
输出: true;

输入: (s1 = "abc"), (s2 = "bad");
输出: false;
```

```typescript
// 排序后比较
const CheckPermutationSort = (s1: string, s2: string) => {
  return s1.split("").sort().join("") === s2.split("").sort().join("");
};
// 通过数组来统计每一个字符的数量
const count = (str: string) => {
  const arr = [];
  let i = 0;
  while (i < str.length) {
    const key = str[i].charCodeAt(0) - "a".charCodeAt(0);
    !!arr[key] ? arr[key]++ : (arr[key] = 1);
    i++;
    console.log(arr);
  }
  return arr;
};
const CheckPermutationArrayCount = (s1: string, s2: string) => {
  const arr1 = count(s1);
  const arr2 = count(s2);
  // 可以直接toString() 也可以数组遍历
  return arr1.toString() === arr2.toString();
};
```
