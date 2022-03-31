/*
 * @Date: 2022-04-01 00:10:38
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-04-01 00:30:30
 * @FilePath: /leetCode/剑指Offer/CheckPermutation.ts
 */
const CheckPermutationSort = (s1: string, s2: string) => {
  return s1.split("").sort().join("") === s2.split("").sort().join("");
};

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
