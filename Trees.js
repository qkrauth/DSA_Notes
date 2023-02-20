// Trees are another form of linked lists. The nodes are different however they are Binary Tree Nodes. They have two arrows that fork into different directions going downward. the Binary Tree Node Object has these properties: {value: 4, left: null, right:null}

// A full Tree has their Nodes either pointing to 2 nodes or 0 nodes. A perfect Tree means every line that has items in it is completely filled all the way across. Basically if it is symetrical down the middle.

// A Node that does not have any children are called Leaf Nodes (the ones at the bottom of the tree)

// A Binary Search Tree is roughly O(log n) or divide and conquer

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }
}

