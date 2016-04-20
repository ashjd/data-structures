var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.length = 0;
  extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.length > 0 ? this.length : 0;
};

queueMethods.enqueue = function(value) {
  this[this.length] = value;
  this.length++;
};

queueMethods.dequeue = function() {
  var dequeued = this[0];

  for (var i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }

  this.length--;

  return dequeued;
};

// helper
var extend = function(to, from) {
  for (key in from) {
    to[key] = from[key];
  }
};