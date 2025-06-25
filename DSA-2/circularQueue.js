// class CircularQueue {
//   constructor(capacity) {
//     this.items = new Array(capacity);
//     this.capacity = capacity;
//     this.currLength = 0;
//     this.front = -1;
//     this.rear = -1;
//   }

//   isFull() {
//     return this.currLength === this.capacity;
//   }

//   isEmpty() {
//     return this.currLength === 0;
//   }

//   size() {
//     return this.currLength;
//   }

//   enqueue(element) {
//     if (this.isFull()) {
//       return null;
//     }

//     this.rear = (this.rear + 1) % this.capacity;
//     this.items[this.rear] = element;
//     this.currLength += 1;
//     if (this.front === -1) {
//         this.front = this.rear;
//       }
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       return null;
//     }

//     const item = this.items[this.front];

//     this.items[this.front] = undefined;
//     this.front = (this.front + 1) % this.capacity;
//     this.currLength -= 1;

//     if (this.isEmpty()) {
//       this.front = -1;
//       this.rear = -1;
//     }

//     return item;
//   }

//   print() {
//     if (this.isEmpty()) {
//       console.log("the queue is empty");
//       return null;
//     } else {
//       let values = "";
//       let i;

//       for (i = this.front; i !== this.front; i = (i + 1) % this.capacity) {
//         values += this.items[i] + " ";
//       }

//       // values += this.items[i];

//       console.log(values);
//     }
//   }
// }





class CircularQueue{

  constructor(capacity){
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  isEmpty(){
    return this.currLength === 0;
  }

  isFull(){
    return this.capacity === this.currLength;
  }

  enqueue(element){
    if(this.isFull()){
      return null;
    }

    this.rear = (this.rear+1) % this.capacity;
    this.items[this.rear] = element;
    this.currLength++;

    if(this.front === -1){
      this.front = this.rear;
    }
  }

  dequeue(){
    if(this.isEmpty()){
      return null;
    }

    this.items[this.front] = undefined;
    this.front = (this.front +1) % this.capacity;
    this.currLength--;

  }

  print(){
    if(this.isEmpty()){
      return null;
    }

    let values = '';
    let i;

    for(i = this.front; i !== this.rear; i = (i+1)%this.capacity ){
      values += this.items[i] + ' ';
    }

    values += this.items[i];

    console.log(values);
    
  }
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
// console.log(queue.size());
queue.print();
console.log(queue.isFull());
console.log(queue.dequeue());
// console.log(queue.peek());
queue.print();
queue.enqueue(60);
queue.print();