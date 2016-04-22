var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];  

  extend(newTree, treeMethods);

  return newTree;
};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  newChild.parent = this;
  this.children.push(newChild);
};

treeMethods.removeFromParent = function() {
  if (this.parent !== null) {
    this.parent.children.splice(this.parent.children.indexOf(this), 1);
    this.parent = null;
  }
  return this;
};

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

treeMethods.traverse = function(callback) {
  callback(this);
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(callback);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
