/*
 * @Date: 2022-04-13 17:31:40
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-04-13 17:35:07
 * @FilePath: /leetCode/树/重建二叉树/reConstructorBinaryTree.spec.ts
 */
import { describe, test, expect } from "@jest/globals";
import { reConstructorBinaryTree, getHRD } from "./reConstructorBinaryTree";
describe("", () => {
  test("根据前序遍历和中序遍历重建二叉树", () => {
    
  });

  test("根据前序遍历和中序遍历还原后序遍历", () => {
    expect(getHRD("ABC".split(""), "BAC".split(""))).toBe("BCA");
    expect(getHRD("FDXEAG".split(""), "XDEFAG".split(""))).toBe("XEDGAF");
  });
});
