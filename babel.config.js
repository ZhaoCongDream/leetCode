/*
 * @Date: 2022-03-31 13:01:18
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-03-31 13:03:56
 * @FilePath: /leetCode/babel.config.js
 */
module.exports = {
  presets:[
    [
      "@babel/preset-env",
      {
        targets:{
          node:"current"
        }
      }
    ]
  ],
  plugins:["babel-plugin-transform-es2015-modules-commonjs"]
}