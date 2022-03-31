/*
 * @Date: 2022-03-31 16:16:21
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-03-31 17:04:30
 * @FilePath: /leetCode/最长公共前缀/index.test.ts
 */
import { test, expect } from "@jest/globals";
import { longestCommonPrefix } from "./index";
test("test", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe('fl')
  expect(longestCommonPrefix( ["dog","racecar","car"])).toBe('')
});
