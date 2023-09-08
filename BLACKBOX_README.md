 # Knight's Tour on a Chessboard

This project implements the Knight's Tour problem on a chessboard using a breadth-first search (BFS) algorithm. The code is written in JavaScript and organized into three separate files: `Graph.js`, `Knight.js`, and `chessBoard.js`.

### Graph.js
The `Graph.js` file defines a general-purpose graph data structure using an adjacency list. The `create` function initializes a new graph object with an empty adjacency list. The `addVertex` method adds a new vertex to the graph, and the `addEdge` method adds a new edge between two vertices.

```javascript
// Define the adjacency list using a Map
const AdjList = new Map();

/**
 * Adds a vertex to the graph.
 * @param {string} v - The vertex to add.
 */
function addVertex(v) {
  // Initialize the adjacent list with an empty Set
  AdjList.set(v, new Set());
}

/**
 * Adds an edge between two vertices in the graph.
 * @param {string} v - The first vertex.
 * @param {string} w - The second vertex.
 */
function addEdge(v, w) {
  // Check if both vertices exist in the graph
  if (AdjList.has(v) && AdjList.has(w)) {
    // Add the edge between v and w
    AdjList.get(v).add(w);

    // Add the edge between w and v
    AdjList.get(w).add(v);
  }
}
```

### Knight.js
The `Knight.js` file implements the Knight's Tour algorithm using the BFS algorithm. The `create` function initializes a new chessboard using the `create` function from the `chessBoard.js` file. It then adds all possible knight moves to each vertex on the chessboard.

```javascript
import chessBoard from "./chessBoard.js";
//a graph with edges where the knight can go

function create() {
  // Create the game board
  const map = chessBoard.create();

  // Get all vertices of the map
  let vertices = map.AdjList.keys();

  // Add knight moves to each vertex
  for (let vertex of vertices) {
    let [x, y] = JSON

Generated by [BlackboxAI](https://www.useblackbox.ai)