/*
 * @Date: 2022-03-29 23:15:10
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-03-29 23:49:49
 * @FilePath: /leetCode/栈/index.ts
 */
class stackNode<T> {
  item: null | T;
  next: null | stackNode<T>;
  constructor(item = null, next = null) {
    this.item = item;
    this.next = next;
  }
}

class stack<T> {
  index: number = 0;
  first: null | stackNode<T>;
  constructor(first = null) {
    this.first = first;
  }
  push(item: T) {
    const oldFirst = this.first;
    this.first = new stackNode();
    this.first.item = item;
    this.first.next = oldFirst;
    this.index++;
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.first?.item;
    this.first = this.first?.next ?? null;
    this.index--;
    return item;
  }
  isEmpty() {
    return this.index === 0;
  }
  size() {
    return this.index;
  }
  iterator() {}
}

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
console.log(list.pop())
/** 
 stackNode { item: 'test', next: null }
*/
console.log(list.first);