// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      node = node.next;
      counter++;
    }
    return counter;
  }
  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    if (!node) {
      return;
    }
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    let node = this.head;
    if (!node) return;

    let nextNode = node.next;
    if (!nextNode) {
      this.clear();
      return;
    }
    while (nextNode.next) {
      node = nextNode;
      nextNode = nextNode.next;
    }
    node.next = null;
  }

  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    let node = this.getLast();
    node.next = new Node(data);
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter == index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    let size = this.size();
    if (index > size) return;
    if (index == 0) {
      this.removeFirst();
      return;
    }
    if (index == size) {
      this.removeLast();
      return;
    }
    let node = this.getAt(index - 1);
    let nextNode = this.getAt(index + 1);
    node.next = nextNode;
  }

  insertAt(data, index) {
    let size = this.size();
    if (index >= size) {
      this.insertLast(data);
      return;
    }
    if (index == 0) {
      this.insertFirst(data);
      return;
    }

    let node = this.getAt(index - 1);
    let nextNode = node.next;
    node.next = new Node(data, nextNode);
  }
  forEach(fun) {
    let node = this.head;
    while (node) {
      fun(node);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
