class Node {
  constructor(value) {
    this.value = value;
    this.head = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      node.next = this.head;
    }else{
        let curr = this.head;
        while(curr.next !== this.head){
            curr = curr.next;
        }

        curr.next = node;
        node.next = this.head;
    }
  }

  prepend(value){
    const node = new Node(value);
    if(this.isEmpty()){
        this.head = node;
        node.next = this.head;
    }else{
        node.next = this.head;
        this.head = node;
    }
  }

  print(){
    if(this.isEmpty()) return console.log('the list is empty');
    
    let curr = this.head;
    do{
        console.log(curr.value);
        curr = curr.next;
    }while(curr.next !== this.head)
  }

  delete(){ 
  }
}








