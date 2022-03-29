<!--
 * @Date: 2022-03-28 11:13:33
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-03-30 00:19:27
 * @FilePath: /leetCode/栈/README.md
-->
# 栈相关
#### 1.实现一个栈，支持Api:push、pop、isEmpty、size，支持迭代，实现iterator

```typescript
// ./stack.ts
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
/* 2 */
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
```

#### 2.利用栈检测括号是否完整
[()]{}{[()()]()} -- true
([)] -- false
```typescript
// ./parentheses.ts
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
```

#### 3.有一个队列 Q ，利用栈反转队列

```typescript

```

#### 4.输入一个十进制数字，转换二进制

```typescript

```

