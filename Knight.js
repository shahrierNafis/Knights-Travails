import chessBoard from "./chessBoard.js";
//a graph with edges where the knight can go

function create() {
  // Create the game board
  const map = chessBoard.create();

  // Get all vertices of the map
  let vertices = map.AdjList.keys();

  // Add knight moves to each vertex
  for (let vertex of vertices) {
    let [x, y] = JSON.parse(vertex);
    map.addEdge(vertex, JSON.stringify([x + 1, y + 2]));
    map.addEdge(vertex, JSON.stringify([x + 2, y + 1]));
    map.addEdge(vertex, JSON.stringify([x + 2, y - 1]));
    map.addEdge(vertex, JSON.stringify([x + 1, y - 2]));
    map.addEdge(vertex, JSON.stringify([x - 1, y - 2]));
    map.addEdge(vertex, JSON.stringify([x - 2, y - 1]));
    map.addEdge(vertex, JSON.stringify([x - 2, y + 1]));
    map.addEdge(vertex, JSON.stringify([x - 1, y + 2]));
  }

  /**
   * Returns the shortest path from 'from' to 'to' using the Breadth-First Search algorithm.
   *
   * @param {object} from - The starting vertex.
   * @param {object} to - The destination vertex.
   * @returns {array} - The shortest path from 'from' to 'to'.
   */
  function moves(from, to) {
    // Convert vertices to strings for comparison
    let start = JSON.stringify(from);
    let end = JSON.stringify(to);

    // Create a queue to store visited vertices
    let queue = [];
    // Create a list to store visited vertices
    let visited = [];

    // Create an object to keep track of predecessors
    let pred = {};

    // Add the start vertex to the visited list and queue
    visited.push(start);
    queue.push(start);

    // Perform Breadth-First Search
    while (queue.length) {
      let vertex = queue.shift();

      // Traverse all adjacent vertices
      for (let adjVertex of map.AdjList.get(vertex)) {
        // If the adjacent vertex was never visited
        if (!visited.includes(adjVertex)) {
          // Add the adjacent vertex to the visited list and set its predecessor
          visited.push(adjVertex);
          pred[adjVertex] = vertex;

          // Add the adjacent vertex to the queue
          queue.push(adjVertex);

          // If the adjacent vertex is the destination, stop BFS
          if (adjVertex == end) break;
        }
      }
    }

    // Create the path from 'from' to 'to'
    let path = [];
    let crawl = end;
    path.push(JSON.parse(crawl));

    // Crawl back to the start
    while (pred[crawl]) {
      path.push(JSON.parse(pred[crawl]));
      crawl = pred[crawl];
    }

    // Return the shortest path
    return path.reverse();
  }

  return { moves };
}
export default { create };
