/*
 * @Date: 2022-03-30 23:33:51
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-03-30 23:42:54
 * @FilePath: /leetCode/排序/bubbleSort.ts
 */
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
