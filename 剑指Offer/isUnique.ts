/*
 * @Date: 2022-04-01 00:06:13
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-04-01 00:07:23
 * @FilePath: /leetCode/剑指Offer/isUnique.ts
 */
// 使用 set 比较长度
const isUniqueSet = (astr:string)=>{
  return new Set(astr).size === astr.length
}

// 先排序 然后循环判断当前元素和下一个元素是否相同
const isUniqueLoop = (astr:string)=>{
  return astr.split('').sort().some((v,i,s)=> v === s(i + 1))
}
// 使用位运算 ,通过位运算构建一个hash的长度为26的数字 每一位对应一个 1 或 0
// 比如 "abcz"就会对应 10000000000000000000000111
// 然后使用 & 比较 有重复的就会是 1 & 1
const isUniqueBit = (astr: string) => {
  let mask = 0;
  for (let char of astr) {
    // 计算当前字符到 a 的距离
    let bit = char.charCodeAt(0) - "a".charCodeAt(0);
    if ((mask & (1 << bit)) !== 0) {
      return false;
    } else {
      mask = mask | (1 << bit);
    }
  }
  return true;
}