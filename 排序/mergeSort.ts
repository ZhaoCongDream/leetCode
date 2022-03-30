/*
 * @Date: 2022-03-30 23:26:40
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-03-30 23:26:41
 * @FilePath: /leetCode/排序/mergeSort.ts
 */
function merge<T>(left:T[] = [], right:T[] = []) {
  const result:T[] = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      const value = left.shift()
      if(value !== undefined){
        result.push(value);
      }
    } else {
      const value = right.shift()
      if(value !== undefined){
      result.push(value);
      }
    }
  }
  if (left.length > 0) result.push(...left);
  if (right.length > 0) result.push(...right);
  return result
}
export function mergeSort<T>(arr: T[]): T[] {
  if (arr.length < 2) return arr;
  const index = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, index));
  const right = mergeSort(arr.slice(index));
  return merge(left,right);
}