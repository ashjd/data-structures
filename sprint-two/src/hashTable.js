

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    // check if keys are the same
    var foundKey = false;
    
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        foundKey = true;
      }
    }

    if (!foundKey) {
      bucket.push([k, v]);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++ ) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(bucket) {
    bucket = bucket || [];
    
    for (var i = 0; i < bucket.length; i++ ) {
      if (bucket[i][0] === k) {
        bucket.splice(i, 1);
      }
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
