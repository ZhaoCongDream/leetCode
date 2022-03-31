/*
 * @Date: 2022-03-31 13:04:22
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-03-31 13:06:24
 * @FilePath: /leetCode/jest.config.js
 */
module.exports = {
  preset:"ts-jest",
  transform:{
    "^.+\\.js$":"babel-jest",
    "^.+\\.(ts|tsx)$":"ts-jest"
  }
}