const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * c;
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */



class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    let newElement = new ListNode(value)
    if (!this.first) {
      this.first = newElement;
      this.last = newElement;
    }
    else {
      this.last.next = newElement;
      this.last = this.last.next;
    }
  }

  dequeue() {
    this.first = this.first.next;
  }
}
const queue = new Queue()
module.exports = {
  Queue
};
