class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListWithTail {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      console.log("list is empty");
      return -1;
    }

    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      console.log("the list is empty");
      return -1;
    }

    if (this.getSize() === 1) {
      this.head = null;
      this.tail = null;
    } else {
    }

    let pre = this.head;
    while ( pre.next !== this.tail) {
      pre = pre.next;
    }
    pre.next = null;
    this.tail = pre;
  }

  print() {
    if ((this, this.isEmpty())) {
      console.log("the list is empty");
      return -1;
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += curr.value + " ";
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedListWithTail();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.prepend(0);
list.print();
list.removeFromFront();
list.print();
list.removeFromEnd();
list.print();
