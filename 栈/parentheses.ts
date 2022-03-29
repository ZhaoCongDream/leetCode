/*
 * @Date: 2022-03-30 00:16:50
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-03-30 00:17:54
 * @FilePath: /leetCode/栈/parentheses.ts
 */
import { stack } from "./stack";
function parentheses(str: string) {
  const map = new Map<string, string>();
  map.set(")", "(");
  map.set("]", "[");
  map.set("}", "{");
  const strStack = new stack<string>();
  let flag = true;
  let index = 0;
  while (flag && index < str.length) {
    const s = str[index];
    const value = map.get(s);
    if (value) {
      if (value !== strStack.pop()) {
        flag = false;
      }
    } else {
      strStack.push(s);
    }
    index++;
  }
  return flag && strStack.isEmpty();
}
export {
  parentheses
}