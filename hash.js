// function Hash(k, v) {
//   let total = 0;
//   const PRIME = 31;
//   for (let i = 0; i < k.length; i++) {
//     let char = k[i];
//     let value = char.charCodeAt(0) - 96;
//     total = (total * PRIME + value) % v;
//   }
//   return total;
// }
// console.log(Hash('zen', 5));
// console.log(Hash('pink', 13));
// console.log(Hash('cyan', 13));

class Hash {
  constructor() {
    this.data = {};
  }

  set(key, value) {
    this.data[key] = value;
  }

  get(key) {
    return this.data[key];
  }

  get keys() {
    return Object.keys(this.data);
  }

  get values() {
    return Object.values(this.data);
  }

  get entries() {
    return Object.entries(this.data);
  }
}

const hash = new Hash();

hash.set('name', 'John');
hash.set('age', 25);
hash.set('city', 'New York');

console.log(hash.get('name'));
console.log(hash.keys);
console.log(hash.values);
console.log(hash.entries);
