/*
 * @Date: 2022-03-29 23:56:44
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-03-29 23:56:44
 * @FilePath: /leetCode/栈/stack.ts
 */
/*
 * @Date: 2022-03-29 23:15:10
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-03-29 23:56:37
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
    // 新节点推入栈中 first 指向新节点
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


export {
  stackNode,
  stack
}