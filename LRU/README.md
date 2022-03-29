<!--
 * @Date: 2022-03-28 11:13:33
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-03-29 20:04:58
 * @FilePath: /leetCode/LRU/README.md
-->
# LRU

请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。 

实现 LRUCache 类： 


```javascript
输入
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
输出
[null, null, null, 1, null, -1, null, -1, 3, 4]

解释
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
```
答案
```javascript
class lruMap {
  limit: number;
  cache: InstanceType<MapConstructor>;
  constructor(limit: number) {
    this.limit = limit;
    this.cache = new Map<number, number>();
  }
  get(key: number) {
    if (!this.cache.has(key)) {
      return -1;
    }
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key: number, value: number) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    if (this.cache.size >= this.limit) {
      this.cache.delete(this.cache.keys().next().value);
    }

    this.cache.set(key, value);
  }
}


const lruCache = new lruMap(2);

lruCache.put(1, 1);
lruCache.put(2, 2);
console.log(lruCache.get(1))
lruCache.put(3, 3);
console.log(lruCache.get(2))
lruCache.put(4, 4);
console.log(lruCache.get(1))
console.log(lruCache.get(3))
console.log(lruCache.get(4))
console.log(lruCache.cache);
```