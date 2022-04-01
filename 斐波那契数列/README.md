<!--
 * @Date: 2022-04-01 19:18:48
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-04-01 19:51:53
 * @FilePath: /leetCode/斐波那契数列/README.md
-->

### 斐波那契数列，现在要求输入一个整数 n，请你输出斐波那契数列的第 n 项（从 0 开始，第 0 项为 0）。

```typescript
// 这个数列从第3项开始，每一项都等于前两项之和。
1、1、2、3、5、8、13、21、34
```

```typescript
// 基本思路
f(n) = f(n - 1) + f(n - 2);
```

#### 递归解法

```typescript
export const Fibonacci = (n) => {
  if (n < 2) return n;
  return Fibonacci(n - 1) + Fibonacci(n - 2);
};
```

#### 递归的问题

正常来讲我们是采用递归思路来解答该问题，但是在剑指 Offer 中递归被当成了反面例子，因为:

- 递归的本质是把一个复杂问题分解成两个或多个小问题，如果多个小问题出现重复情况，会导致重复计算。
- 递归会导致爆栈，因为每一次递归都需要调用一次函数，如果层级比较深那么会导致 js 不断的开辟栈空间且不会被内存垃圾回收，直到超出内存大小导致爆栈。

##### 优化重复计算

```typescript
// 增加缓存 减少重复计算
export const FibonacciMemory = (n, memory:any) => {
  if (n < 2) return n;
  if (!memory[n]) {
    memory[n] = FibonacciMemory(n - 1, memory) + FibonacciMemory(n - 2, memory);
  }
  return memory[n];
};
```
##### 使用动态规划解决爆栈问题
```typescript
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
```
