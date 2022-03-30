/*
 * @Date: 2022-03-30 23:26:50
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-03-30 23:26:50
 * @FilePath: /leetCode/排序/quickSort.ts
 */
export function quickSort<T>(arr: T[]): T[] {
  if (arr.length < 2) return arr;
  const value: T = arr.splice(arr.length - 1, 1)[0];
  const left: T[] = arr.filter((e) => e < value);
  const right: T[] = arr.filter((e) => e >= value);
  return [...quickSort(left), value, ...quickSort(right)];
}
