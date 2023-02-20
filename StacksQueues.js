// A stack is like a can of tennis balls, when we add to a stack we say that we are "pushing an item" onto the stack, and if we remove it that is called "popping an item" from the stack

// Stacks use a term called LIFO: Last In First Out... this can be demonstrated with a can of tennis balls, you cannot remove the bottom ball without removing the two above it first

// When implementing a stack with an array, it is best to it from the end of the array, so that adding and removing items does not make the other items have to re-index 0(1) ... When implementing a stack with a linked list it is best to use the "left" side or the head side because adding and removing nodes from the head side is an 0(1) operation

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value)
        this.top = newNode
        this.bottom = newNode
        this.length = 1
    }
}






// Queues are the opposite of Stacks they go by FIFO: First In First Out

// The actions of a Queue are happening on both ends, meaning if an item gets added on one end then on the other end an item is being removed

// It is best to use a Queue on a linked list, add an item through the tail end and remove an item from the head end because both operations end up being an O(1)

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(value) {
        const newNode = new Node(value)
        this.first = newNode
        this.last = newNode
        this.length = 1
    }
}