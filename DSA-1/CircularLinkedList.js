class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add a node to the end
    append(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
        newNode.next = this.head;
      } else {
        let current = this.head;
  
        while (current.next !== this.head) {
          current = current.next;
        }
  
        current.next = newNode;
        newNode.next = this.head;
      }
    }
  
    // Display the list
    printList() {
      if (!this.head) {
        console.log("List is empty");
        return;
      }
  
      let current = this.head;
      do {
        console.log(current.data);
        current = current.next;
      } while (current !== this.head);
    }
  
    // Delete a node by value
    delete(data) {
      if (!this.head) return;
  
      let current = this.head;
      let previous = null;
  
      do {
        if (current.data === data) {
          if (previous) {
            previous.next = current.next;
            if (current === this.head) {
              this.head = current.next;
            }
          } else {
            // Deleting the head
            let last = this.head;
            while (last.next !== this.head) {
              last = last.next;
            }
            this.head = current.next;
            last.next = this.head;
          }
          return;
        }
        previous = current;
        current = current.next;
      } while (current !== this.head);
    }
  }
  
  // Usage
  const cll = new CircularLinkedList();
  cll.append(10);
  cll.append(20);
  cll.append(30);
  cll.printList();  // 10, 20, 30
  
//   cll.delete(20);
  cll.printList();  // 10, 30
  