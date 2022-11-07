console.log('working');

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let hash = this._hash(key);
    if (!this.data[hash]) {
      this.data[hash] = [];
    }
    this.data[hash].push([key, value]);
  }
  get(key) {
    let hash = this._hash(key);
    if (this.data[hash].length > 0) {
      for (let i = 0; i < this.data[hash].length; i++) {
        const currentBucket = this.data[hash];
        if (currentBucket[i][0] == key) {
          return currentBucket[i][1];
        }
      }
    }
    return this.data[hash];
  }
}

const myHashTable = new HashTable(5);
