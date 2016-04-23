/**
 * Implement Tree using the functional shared instantiation pattern
 */

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];  

  extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

/**
 * Adds a value (as a child tree) to the tree
 * Time Complexity: O(1)
 *
 * @param value
 */
treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  newChild.parent = this;
  this.children.push(newChild);
};

/**
 * Removes the tree from its parent
 * Time Complexity: O(n)
 *
 * @return {object} this
 */
treeMethods.removeFromParent = function() {
  if (this.parent !== null) {
    this.parent.children.splice(this.parent.children.indexOf(this), 1);
    this.parent = null;
  }
  return this;
};

/**
 * Check if the tree contains a target value
 * Time Complexity: O(n)
 *
 * @param target
 * @return {boolean}
 */
treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
    return false;
  }
};

/**
 * Invoke a callback on a tree and all its children
 * Time Complexity: O(n)
 *
 * @param {function} callback
 */
treeMethods.traverse = function(callback) {
  callback(this);
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(callback);
  }
};

// Helper Function
var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};
