/*
 * @Date: 2022-03-30 23:32:55
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-03-31 00:12:11
 * @FilePath: /leetCode/排序/insertSort.ts
 */
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
