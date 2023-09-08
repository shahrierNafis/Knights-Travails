import Graph from "./Graph.js";
/**
 * Creates an 8x8 chessboard.
 * @returns {Graph} The created chessboard.
 */
function create() {
  const board = Graph.create(); // create a new graph
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      board.addVertex(JSON.stringify([i, j])); // add each cell as a vertex with coordinates
    }
  }
  return board;
}

export default { create };
