var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};


Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.size()] = value;
};

Queue.prototype.dequeue = function() {
  var first = Object.keys(this.storage).sort()[0];
  var value = this.storage[first];

  // clean up the storage by removing the first item
  delete this.storage[first];

  // then shift the items behind it
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
    delete this.storage[key];
  }

  return value;
};