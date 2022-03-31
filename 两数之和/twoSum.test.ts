/*
 * @Date: 2022-03-31 12:56:46
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-03-31 13:08:50
 * @FilePath: /leetCode/两数之和/twoSum.test.ts
 */
import { test, expect } from "@jest/globals";
import { twoSum } from "./index";

test("twoSum [2,7,11,15],9", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});
test("twoSum [3,2,4],6", () => {
  expect(twoSum([3,2,4], 6)).toStrictEqual([1,2]);
});
test("twoSum [3,3],6", () => {
  expect(twoSum([3,3], 6)).toStrictEqual([0, 1]);
});
test("twoSum [3,3],5", () => {
  expect(twoSum([3,3], 5)).toBe(-1);
});