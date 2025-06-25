class Node {
  constructor(value) {
    this.value = value;
    this.pre = null;
    this.next = null;
  }
}

class DoublyLinkedlist {
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
    }else{
        node.next = this.head;
        this.head.pre = node;
        this.head = node;
    }

    this.size++;
  }

  append(value){
    const node = new Node(value);
    if(this.isEmpty()){
        this.head = node;
        this.tail = node;
    }else{
        this.tail.next = node;
        node.pre = this.tail;
        this.tail = node;
    }
    this.size++;
  }

  removeFromFront(){
    if(this.isEmpty()){
        console.log('the list is empty');
        return -1;
    }
    if(this.getSize() === 1){
        this.head = null;
        this.tail = null;
    }else{
        this.head = this.head.next;
        this.head.pre = null;
        this.size--;
    }
  }

  removeFromEnd(){
    if(this.isEmpty()) return console.log('the list is empty');

    if(this.getSize() === 1){
        this.head = null;
        this.tail = null;
    }else{
        this.tail = this.tail.pre;
        this.tail.next = null;
    }

    this.size--;
  }

  removeValue(value){
    if(this.isEmpty()){
        console.log('the list is empty');
        return null;
    }

    let curr = this.head;

    while(curr.next.value !== value){
        curr = curr.next;
    }

    curr.next = curr.next.next;
    curr.next.pre = curr;
  }

  print(){
    if(this.isEmpty()){
        console.log('the list is empty');
        return null;
    }else{
        let curr = this.head;
        let values = '';
        while(curr){
            values += curr.value + ' ';
            curr = curr.next;
        }
        console.log(values);
        
    }
  }

  printReverse(){
    if(this.isEmpty()){
        console.log("the list is empty");
        return null;
    }else{
        let curr = this.tail;
        let values = '';
        while(curr){
            values += curr.value + ' '
            curr = curr.pre;
        }
        console.log(values)
    }
  }

  removeMiddle(){
    if(this.getSize() ===  0){
      return null;
    }

    if(this.getSize() === 1){
      this.head  = null;
      this.tail = null;
    }else{
      let fast = this.head;
      let slow = this.head;

      while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
      }

      slow.pre.next = slow.next;
      slow.next.pre = slow.pre;
    }

  }
}



const list = new DoublyLinkedlist();

list.append(5);
list.append(6);
// list.append(7);
list.print();
list.prepend(4);
list.prepend(3);
list.prepend(2);
list.prepend(1);
list.print();
// list.removeFromFront();
// list.removeFromEnd();
// list.print();
// list.printReverse();
// list.removeValue(3)
// list.printReverse();
list.removeMiddle();
list.print();