/*
 * @Date: 2022-03-30 23:32:47
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-03-30 23:50:32
 * @FilePath: /leetCode/排序/selectSort.ts
 */
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
