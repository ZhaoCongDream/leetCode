/*
 * @Date: 2022-04-01 10:27:12
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-04-01 10:27:13
 * @FilePath: /leetCode/剑指Offer/replaceSpaces.ts
 */
export const replaceSpaces = function(S, length) {
  return S.slice(0,length).replaceAll(" ","%20")
};