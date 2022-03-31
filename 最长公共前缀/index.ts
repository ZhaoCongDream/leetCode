/*
 * @Date: 2022-03-31 16:16:07
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-03-31 17:04:54
 * @FilePath: /leetCode/最长公共前缀/index.ts
 */

export const longestCommonPrefix = (strList: string[]) => {
  if (strList.length < 2) return strList[0];
  let str = strList.shift();
  for (let i = 0; i < strList.length && str.length > 0; i++) {
    const element = strList[i];
    for (let j = 0; j < str.length; j++) {
      if (str.slice(0, j) !== element.slice(0, j)) {
        str = str.slice(0, j - 1);
        break;
      }
    }
  }
  return str;
};
