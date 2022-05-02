const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * 
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.data = [];
  }
  push(element) {
    this.data.push(element);
    return this.data
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    let peek = this.data[this.data.length - 1];
    return peek;
  }
}

const stack = new Stack();

module.exports = {
  Stack
};

