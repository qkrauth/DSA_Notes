// Linked Lists do not have indexes where Arrays do, Arrays are in contiguous places in memory, linked lists are not they could be all over the place in memory

// Linked Lists have a "head" that points to the first item and "tail" that points to the last item. Each item in the linked list points to the next one behind it, and the last item "tail" points to null

// Adding an item to the end of a linked list is O(1), but removing that said item from the end is O(n) because we cannot go backwards in the linked list, so we have to start at the head again and iterate through the linked list again to get the tail to point at the correct node

// Adding an item to the head of a linked list is O(1) and removing a node from head of the linked list is also O(1)

// A node in a linked list is both the value and the pointer, Node is actually an object {value: 4, next: null}

class LinkedList {
    constructor(value) {}
    push(value) {}
    unshift(value) {}
    insert(index, value) {}
}

// the constructor creates a new node
// push creates a new node and adds it to the end
// unshift creates a new node and adds it to the beginning
// insert creates a new node and inserts it wherever its meant to go

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
const newNode = new Node(4)

//

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }
}
let myLinkedList = new LinkedList(4)

// this is creating a new linked list that has one node "4" that has both head and tail pointing to it

// LinkedList push

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }
    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
}