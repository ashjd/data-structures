/**
 * LinkedList using the functional instantiation pattern
 */
var LinkedList = function() {
  var list = {};
  list.head = null; // is an instance of Node
  list.tail = null; // is an instance of Node

  /**
   * Adds a value (as a Node) to the end of a linked list
   * Time Complexity: O(1)
   *
   * @param value
   */
  list.addToTail = function(value) {
    var newNode = Node(value);

    // assign the current tail's next node to the new node
    if (list.tail !== null) {
      list.tail.next = newNode;
    }

    // reassign the tail to the new node
    list.tail = newNode;

    // assign the head on the first node in the list
    if (list.head === null) {
      list.head = newNode;
    }
  };

  /**
   * Removes the Node at the beginning of the list
   * Time Complexity: O(1)
   *
   * @return value
   */
  list.removeHead = function() {
    var value = list.head.value;
    list.head = list.head.next;
    return value;
  };

  /**
   * Check if list contains a target value
   * Time Complexity: O(n)
   *
   * @param target
   * @return {boolean}
   */
  list.contains = function(target) {
    var node = list.head;
    while (node !== null) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }

    return false;
  };

  return list;
};

/**
 * Node using the functional instantiation pattern
 *
 * @param value
 */
var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null; // is an instance of Node

  return node;
};
