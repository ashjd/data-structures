/**
 * Graph uses the pseudoclassical instantiation pattern
 */
var Graph = function() {
  this._storage = {};
};

/**
 * Add a node to the graph, passing in the node's value
 * Time Complexity: O(1)
 *
 * @param node
 */
Graph.prototype.addNode = function(node) {
  this._storage[node] = [];
};

/**
 * Return a boolean value indicating if the value passed to contains is represented in the graph.
 * Time Complexity: O(1)
 *
 * @param node
 * @return {boolean}
 */
Graph.prototype.contains = function(node) {
  return this._storage[node] !== undefined;
};

/**
 * Removes a node from the graph.
 * Time Complexity: O(1) ? O(|V|+|E|)
 *
 * @param node
 */
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this._storage[node].length; i++) {
    this.removeEdge(this._storage[node][i], this._storage[node]);
  }

  delete this._storage[node];
};

/**
 * Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
 * Time Complexity: O(1)
 *
 * @param fromNode
 * @param toNode
 * @return {boolean}
 */
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this._storage[fromNode].indexOf(toNode) !== -1;
};

/**
 * Connects two nodes in a graph by adding an edge between them.
 * Time Complexity : O(1)
 *
 * @param fromNode
 * @param toNode
 */ 
Graph.prototype.addEdge = function(fromNode, toNode) {
  this._storage[fromNode].push(toNode);
  this._storage[toNode].push(fromNode);
};

/**
 * Remove an edge between any two specified (by value) nodes.
 * Time Complexity : O(1)
 *
 @param fromNode
 * @param toNode
 */
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this._storage[fromNode].splice(this._storage[fromNode].indexOf(toNode), 1);
  this._storage[toNode].splice(this._storage[toNode].indexOf(fromNode), 1);
};

/**
 * Pass in a callback which will be executed on each node of the graph.
 * Time Complexity : O(n)
 *
 * @param {function} cb
 */

Graph.prototype.forEachNode = function(cb) {
  for (var node in this._storage) {
    cb(node);
  }
};


