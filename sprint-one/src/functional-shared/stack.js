var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.length = 0;
  extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.length] = value;
  this.length++;
};

stackMethods.pop = function() {
  var popped = this[this.length - 1];
  delete this[this.length - 1];
  this.length--;
  return popped;
};

stackMethods.size = function() {
  return this.length > 0 ? this.length : 0;
};

// helper
var extend = function(to, from) {
  for (key in from) {
    to[key] = from[key];
  }
};