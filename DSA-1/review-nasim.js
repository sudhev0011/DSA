// (()) 

// ({]}) 

// ([{}])

// ({[}])

// function validPara(str){
    
//     let valid = {
//         "(" : ")",
//         "[" : "]",
//         "{" : "}"
//     }
    
//     for(let i = 0; i < str.length; i++){
        
//         if( Object.keys(valid).includes(str[i])){
//             for(let j = 0+1; j < str.length; j++){
//                 if(str[j] !== Object.values(valid)){
//                     return false;
//                 }else{
//                     true;
//                 }
//             }
//         }
//     }
// }


// console.log(validPara('({]})'))
// console.log(validPara('({[}])'))



// let arr = [5,6,0,3,0,0,2,0,9,0,1]



// function moveToRight(arr){
//     let dummy = [];
    
    
//     for(let val of arr){
//         if(val !== 0){
//             dummy.push(val)
//         }
//     }

//     for(let value of arr){
//         if(value === 0){
//             dummy.push(value)
//         }
//     }
    
//     return dummy;
// }


// console.log(moveToRight(arr))





class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.pre = null;
    }
}


// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }
    
//     append(value){
//         let node = new Node(value)
//         if(this.head === null){
//             this.head = node;
//             this.size++;
//         }else{
//             let curr = this.head;
            
//             while(curr.next !== null){
//                 curr = curr.next;
//             }
            
//             curr.next = node;
//             this.size++;
//         }
//     }
    
//     middle(){
//         if(this.head === null){
//         return null;
//         }
        
//         let fast = this.head;
//         let slow = this.head;
        
//         while(fast !== null && fast.next !== null){
//             fast = fast.next.next;
//             slow = slow.next;
//         }
        
//         console.log(slow.value)
//     }
    
//     print(){
//         let values = '';
        
//         let curr =  this.head;
//         while(curr){
//             values += curr.value + ' ';
//             curr = curr.next;
//         }
        
//         console.log(values)
//     }
// }

// let list = new LinkedList();

// list.append(8)
// list.append(5)
// list.append(2)
// list.append(9)
// list.append(67)
// list.print()
// list.middle()



class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    
    append(value){
        let node = new Node(value)
        if(this.head === null){
            this.head = node;
            this.tail = node;
        }
        node.pre = this.tail;
        this.tail.next = node;
        this.tail = node;
        
    }
    
    print(){
        if(this.head === null){
            return null;
        }
    
    
    let curr = this.head;
    let values = '';
    while(curr){
        values += curr.value
        curr = curr.next
    }
    
    console.log(values);
    }
}

let list = new DoublyLinkedList()

list.append(7)
list.append(5)
list.append(1)
list.append(8)
list.print()


// function Binary(arr,val){
    
//     let left = 0;
//     let right = arr.length - 1;
    
//     while(right >= left){
//         let middle = Math.floor((left + right )/ 2);
        
//         if(val === arr[middle]){
//             return middle;
//         }
//         if(val > arr[middle]){
//             left = middle  + 1;
//         }else{
//             right = middle - 1;
//         }
//     }
    
// }


// let arr = [1,2,3,4,5,6,7,8]

// console.log(Binary(arr,3))
    