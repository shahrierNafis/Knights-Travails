/**
 * Creates a graph with the ability to add vertices and edges.
 * @returns {Object} The graph object.
 */
function create() {
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

  return {
    get AdjList() {
      return AdjList;
    },
    addVertex,
    addEdge,
  };
}
export default { create };
