<!--
 * @Date: 2022-03-29 20:11:50
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-03-31 00:12:28
 * @FilePath: /leetCode/排序/README.md
-->
# 冒泡
从头开始比较，两两交换，把最大的数不断推到序列的后面
```typesrcipt
export function bubbleSort<T>(arr: T[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i ; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    console.log(arr)
  }
  return arr
}
```
# 插入
每一次插入都与之前已经插入的元素进行比较，找到插入的位置
```typesrcipt
export function insertSort<T>(arr: T[]) {
  if (arr.length === 0) return [];
  // 从第二个元素开始查
  for (let i = 1; i < arr.length; i++) {
     let target = arr[i]
     let j = i
      // 如果有序列的元素大于 target 那么尾部元素右移一个 腾出位置
     while(j > 0 && arr[j - 1] > target){
       arr[j] = arr[j - 1]
       j--
     }
     arr[j] = target

  }
  return arr;
}

```
# 选择
每次遍历时，选择一个最大的交换到序列的后面
```typesrcipt
export function selectSort<T>(arr: T[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    let index = i;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[index]) {
        index = j;
      }
    }
    if (index !== i) {
      [arr[index], arr[i]] = [arr[i], arr[index]];
    }
  }
  return arr;
}

```
# 快排

分治思想：  
1.根据一个中位数分割为left和right两个数组，left数组比中位数小，right数组比中位数大。  
2.递归分割，终止条件是每个数组小于两个元素，最后合并。

```typescript
function quickSort<T>(arr: T[]): T[] {
  if (arr.length < 2) return arr;
  const value: T = arr.splice(arr.length - 1, 1)[0];
  const left: T[] = arr.filter((e) => e <= value);
  const right: T[] = arr.filter((e) => e > value);
  return [...quickSort(left), value, ...quickSort(right)];
}
```

# 归并
分治思想：  
1.根据长度分割为left和right两个数组，然后递归分割。  
2.终止条件是每个数组小于两个元素。  
3.最后合并的时候把left和right合并成一个有序的数组。  
4.与快排不同的是快排注重的是怎么分割有序，归并注重的是合并有序。
```typescript
function merge<T>(left: T[] = [], right: T[] = []) {
  const result: T[] = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      const value = left.shift();
      if (value !== undefined) {
        result.push(value);
      }
    } else {
      const value = right.shift();
      if (value !== undefined) {
        result.push(value);
      }
    }
  }
  if (left.length > 0) result.push(...left);
  if (right.length > 0) result.push(...right);
  return result;
}

function mergeSort<T>(arr: T[]): T[] {
  if (arr.length < 2) return arr;
  const index = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, index));
  const right = mergeSort(arr.slice(index));
  return merge(left, right);
}
```
