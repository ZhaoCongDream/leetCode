/*
 * @Date: 2022-03-28 11:16:03
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-03-31 12:57:04
 * @FilePath: /leetCode/两数之和/index.ts
 */
export const twoSum = (arr:number[],target:number)=>{
    const map = new Map()
    for (let index = 0; index < arr.length; index++) {
      const value = target - arr[index]
       if(map.has(value)){
         return [map.get(value),index]
       }else{
         map.set(arr[index],index)
       }
    }
    return -1
}

