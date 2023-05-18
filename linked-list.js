class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // create a new node
    const node = new LinkedListNode(val);

    // link head to node
    // assign head with and increment length
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  addToTail(val) {
    // create a new node
    const node = new LinkedListNode(val);

    // if head is empty, assign and return
    if (!this.head) {
      this.head = node;
      this.length++;
      return;
    }

    // transvers for linked nodes
    let nextNode = this.head;

    while (nextNode) {
      // current node does not link to any node
      // we assign current node to link to newNode
      if (!nextNode.next) {
        nextNode.next = node;
        this.length++;
        return;
      }

      nextNode = nextNode.next;
    }

  }

  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
