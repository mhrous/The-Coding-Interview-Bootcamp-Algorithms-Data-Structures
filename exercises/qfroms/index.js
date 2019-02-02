// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stack_1 = new Stack();
    this.stack_2 = new Stack();
  }
  add(n) {
    this.stack_1.push(n);
  }
  remove() {
    while (this.stack_1.peek()) {
      this.stack_2.push(this.stack_1.pop());
    }
    const result = this.stack_2.pop();
    while (this.stack_2.peek()) {
      this.stack_1.push(this.stack_2.pop());
    }
    return result;
  }

  peek() {
    while (this.stack_1.peek()) {
      this.stack_2.push(this.stack_1.pop());
    }
    const result = this.stack_2.peek();
    while (this.stack_2.peek()) {
      this.stack_1.push(this.stack_2.pop());
    }
    return result;
  }
}

module.exports = Queue;
