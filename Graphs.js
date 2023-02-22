// The Dots in the Graph are known as a "Vertex" or a Node. When 2 Vertex connect it is called an "Edge" or a Connection.

// There is no limit to how many connections a Vertex can have. The connections are either bi-directional or a one-way directional connection

// An adjacency list takes up less space complexity than an adjacency matrix

// Adding a new vertex on an adjacency list is O(1) and establishing an edge (connection) is O(1) on an adjacency matrix & list

// Removing an edge is O(1) on an adjacency matrix

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true
    }
    return false
  }
}
