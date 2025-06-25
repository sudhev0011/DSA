class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
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
    } else {
      let ptr = this.head;
      while (ptr.next) {
        ptr = ptr.next;
      }

      ptr.next = node;
    }

    this.size++;
  }

  insert(value, index) {
    if (index < 0) {
      console.log("invalid inserting index");
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let ptr = this.head;
      for (let i = 0; i < index - 1; i++) {
        ptr = ptr.next;
      }

      node.next = ptr.next;
      ptr.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let ptr = this.head;
      for (let i = 0; i < index - 1; i++) {
        ptr = ptr.next;
      }
      removedNode = ptr.next;
      ptr.next = removedNode.next;
    }

    this.size--;
  }

  removeValue(value) {
    if (this.isEmpty()) return null;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let ptr = this.head;
      while (ptr.next && ptr.next.value !== value) {
        ptr = ptr.next;
      }
      if (ptr.next) {
        // let removedNode = ptr.next;
        ptr.next = ptr.next.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      console.log("the list is empty");
      return -1;
    }

    let ptr = this.head;
    let i = 1;
    while (ptr) {
      if (value === ptr.value) {
        return i;
      }
      ptr = ptr.next;
      i++;
    }

    return -1;
  }

  reverse() {
    let pre = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = pre;
      pre = curr;
      curr = next;
    }
    this.head = pre;
  }

  middle() {
    if (this.isEmpty()) {
      return null;
    } else {
      let slow = this.head;
      let fast = this.head;

      while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
      }

      console.log(slow.value);
      return slow;
    }
  }

  removeMiddle() {
    let curr = this.head;
    let middle = this.middle();

    while (curr.next !== middle) {
      curr = curr.next;
    }

    curr.next = middle.next;
    middle.next = null;
    this.size--;
  }

  removeAdjecentDuplicate() {
    if (this.isEmpty()) {
      return null;
    }
    let curr = this.head;

    while (curr && curr.next) {
      if (curr.value === curr.next.value) {
        curr.next = curr.next.next;
      } else {
        curr = curr.next;
      }
    }
  }

  removeNonAdjecentDuplicates() {
    if (this.isEmpty()) return;

    let seen = new Set();
    let curr = this.head;
    seen.add(curr.value);

    while (curr.next) {
      if (seen.has(curr.next.value)) {
        curr.next = curr.next.next;
        this.size--;
      } else {
        seen.add(curr.next.value);
        curr = curr.next;
      }
    }
  }

  removeNthLastElement(n) {
    let dummy = new Node(-1);
    dummy.next = this.head;
    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i <= n ; i++) {
      fast = fast.next;
    }

    while (fast !== null) {
      fast = fast.next;
      slow = slow.next;
    }

    slow.next = slow.next.next;
  }

  removeNthElement(n) {
    let dummy = new Node(-1);
    dummy = this.head;

    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i < n; i++) {
      fast = fast.next;
    }

    while (fast !== null) {
      fast = fast.next;
      slow = slow.next;
    }

    slow.next = slow.next.next;
  }

  largestValue() {
    if (this.head === null) {
      return null;
    }

    let curr = this.head;
    if (curr.next === null) return curr.value;
    let largest = -Infinity;
    while (curr) {
      if (curr.value > largest) {
        largest = curr.value;
      }
      curr = curr.next;
    }

    console.log(largest);
  }

  print() {
    if (this.isEmpty()) {
      console.log("The list is empty.");
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

const list = new LinkedList();
// console.log(list.isEmpty());
// console.log(list.getSize());
list.prepend(5);
list.prepend(7);
list.prepend(3);
list.append(9);
list.append(7);
list.insert(8, 2);
// list.removeFrom(3);
list.print();
// list.removeNthLastElement(3);
// list.removeNthElement(5);
list.removeValue(7)
list.print();
// list.largestValue();
// console.log(list.search(50))
// list.reverse();
// list.print();
// list.middle();
// list.removeMiddle();
// list.print();
// list.removeAdjecentDuplicate();
// list.removeNonAdjecentDuplicates();
// list.print();
