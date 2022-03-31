/*
 * @Date: 2022-03-31 17:37:58
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-03-31 20:15:27
 * @FilePath: /leetCode/大数相加/index.ts
 */
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
