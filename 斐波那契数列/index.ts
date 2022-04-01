/*
 * @Date: 2022-04-01 19:18:42
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-04-01 19:50:40
 * @FilePath: /leetCode/斐波那契数列/index.ts
 */
export const Fibonacci = (n) => {
  if (n < 2) return n;
  return Fibonacci(n - 1) + Fibonacci(n - 2);
};
// 增加缓存 减少重复计算
export const FibonacciMemory = (n, memory:any) => {
  if (n < 2) return n;
  if (!memory[n]) {
    memory[n] = FibonacciMemory(n - 1, memory) + FibonacciMemory(n - 2, memory);
  }
  return memory[n];
};
// 递归改循环
export const FibonacciLoop = (n) => {
  if (n <= 2) return n;
  let i = 3;
   // 倒数第一项 n - 1
  let n1 = 1;
   // 倒数第二项 n - 2
  let n2 = 1;
  // 当前计算项 n = n - 2 + n - 1 
  let sum =  n2 + n1
  while (i <= n) {
    // 右移一位 [ n - 3, n - 2 ] => [ n - 2, n - 1]
    [n2, n1] = [n1, sum];
    // 计算右移后的结果 n = n - 2 + n - 1 
    sum = n2 + n1;
    // 索引增加，意味着下次循环需要右移
    i++;
  }
  return sum;
};