/*
 * @Date: 2022-03-29 17:49:56
 * @LastEditors: 赵聪
 * @LastEditTime: 2022-03-29 20:03:31
 * @FilePath: /leetCode/LRU/index.ts
 */
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
