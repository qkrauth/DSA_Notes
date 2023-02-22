// Hashes are one way, meaning you can not take the output of the Hash and put it back into the key... And the input of the hash "they key" will always generate the same output

// A collision is when we have an item that maps to the same position as something else in memory

// Seperate Chaining is the process of bunching up the outcomes into an array that fell into the same address space in memory
// Another way of doing Seperate Chaining is to have a Linked List at every address

// Linear Probing is a type of "open addressing" what happens is if a key value pair gets put to an address in memory and something is already taking up that space, it will have to go down the hash table to find an open spot

class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size)
    }
    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
        }
        return hash
    }
}

// The _hash method itself is constant time or O(1)
// Finding an object by its "key" is O(1) because the hash does a good job of spreading the items out in memory
