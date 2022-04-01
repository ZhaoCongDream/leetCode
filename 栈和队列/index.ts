/*
 * @Date: 2022-03-29 23:15:10
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-03-30 00:18:23
 * @FilePath: /leetCode/栈/index.ts
 */
import { stack } from "./stack";

const list = new stack<string>();
list.push("test");
list.push("test2");
// 2
console.log(list.size());
/*
stackNode { item: 'test2', next: stackNode { item: 'test', next: null } }
*/
console.log(list.first);
/* stackNode { item: 'test', next: null } */
console.log(list.first?.next);
/* test */
console.log(list.pop());
/** 
 stackNode { item: 'test', next: null }
*/
console.log(list.first);

import { parentheses } from "./parentheses";
console.log(parentheses("([)]"));
console.log(parentheses("[()]{}{[()()]()}"));
