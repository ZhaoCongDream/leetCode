/*
 * @Date: 2022-03-28 11:16:03
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-03-31 12:51:21
 * @FilePath: /leetCode/两数之和/index.ts
 */
const twoSum = (arr:number[],target:number)=>{
    const map = new Map()
    for (let index = 0; index < arr.length; index++) {
      const value = target - arr[index]
       if(map.has(value)){
         return [index,map.get(value)]
       }else{
         map.set(arr[index],index)
       }
    }
    return -1
}

console.log(twoSum([2,7,11,15],9))
console.log(twoSum([3,2,4],6))
console.log(twoSum([3,3],6))