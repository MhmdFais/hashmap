class HashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.buckets = new Array(initialCapacity).fill(null).map(() => []);
    this.loadFactor = loadFactor;
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode += primeNumber + key.charCodeAt(i);
    }
    return hashCode % this.buckets.length;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const existingNode = bucket.find((node) => node.key === key);

    if (existingNode) {
      existingNode.value = value;
    } else {
      bucket.append({ key, value });
      this.size++;
    }

    if (this.size / this.buckets.length > this.loadFactor) {
      this.resize();
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const existingNode = bucket.find((node) => node.key === key);
    return existingNode?.value;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    return bucket.find((node) => node.key === key) ? true : false;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const existingNode = bucket.find((node) => node.key === key);
    if (existingNode) {
      bucket.remove(existingNode);
      this.size--;
    }
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.buckets.length).fill(null).map(() => []);
    this.size = 0;
  }

  entries() {
    let entries = [];
    this.buckets.forEach((bucket) => {
      if (bucket) {
        bucket.forEach((node) => {
          entries.push([node.key, node.value]);
        });
      }
    });
    return entries;
  }

  resize() {
    const newCapacity = this.buckets.length * 2;
    const newBuckets = new Array(newCapacity).fill(null).map(() => []);

    this.buckets.forEach((bucket) => {
      if (bucket) {
        bucket.forEach((node) => {
          const index = this.hash(node.key);
          const newBucket = newBuckets[index];
          if (newBucket) {
            newBucket.append(node);
          } else {
            newBuckets[index] = new LinkedList();
            newBuckets[index].append(node);
          }
        });
      }
    });

    this.buckets = newBuckets;
  }
}
