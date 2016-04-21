var BinarySearchTree = function(value) {
  var instance = Object.create(binarySearchTreeMethods);
  instance.value = value;
  instance.left = null;
  instance.right = null;

  return instance;
};

binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {
  if (value > this.value) {
    if (this.right !== null) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  } else {
    if (this.left !== null) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  }
};

binarySearchTreeMethods.contains = function(value) {
  if (value === this.value) {
    return true;
  } else {
    if (value > this.value) {
      if (this.right !== null) {
        return this.right.contains(value);
      } else {
        return false;
      }
    } else {
      if (this.left !== null) {
        return this.left.contains(value);
      } else {
        return false;
      }
    }
  }
};

binarySearchTreeMethods.depthFirstLog = function(func) {
  func(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(func);
  }

  if (this.right !== null) {
    this.right.depthFirstLog(func);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
