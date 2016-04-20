var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.dequeue = function() {
    var first = Object.keys(storage)[0];
    var value = storage[first];

    // clean up the storage by removing the first item
    delete storage[first];

    // then shift the items behind it
    for (var key in storage) {
      storage[key - 1] = storage[key];
      delete storage[key];
    }

    return value;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
