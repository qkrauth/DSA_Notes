// Doubly Linked Lists are the same as LL the difference is there is another sequence of arrows pointing the other way as well (with the head node having a previous value of null)

//The Node object now has another entry being prev. {value: 1, next: null, prev: null}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }
}

// The difference is the Node class: it has a new entry being this.prev