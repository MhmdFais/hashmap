class HashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.buckets = new Array(initialCapacity);
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
    const existingNode = bucket?.find((node) => node.key === key);

    if (existingNode) {
      existingNode.value = value;
    } else {
      bucket.append({ key, value });
      this.size++;
    }

    if (this.size / this.buckets.length > this.loadFactor) {
      //this.resize();
    }
  }
}
