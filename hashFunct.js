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
    this.data[hash] = value;
  }
  get(key) {
    let hash = this._hash(key);
    return this.data[hash];
  }
}

const myHashTable = new HashTable(50);
