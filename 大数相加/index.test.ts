/*
 * @Date: 2022-03-31 17:38:09
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-03-31 20:15:05
 * @FilePath: /leetCode/大数相加/index.test.ts
 */
import { expect, test } from "@jest/globals";
import { bigNumberSum } from "./index";
test("bigNumberSum", () => {
  expect(bigNumberSum([2, 4, 3], [5, 6, 4])).toStrictEqual([7, 0, 8]);
  
  expect(bigNumberSum([0], [0])).toStrictEqual([0]);

  expect(bigNumberSum([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])).toStrictEqual([
    8, 9, 9, 9, 0, 0, 0, 1,
  ]);
});
