class Node{
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    
    insertValue(value){
    const node = new Node(value);
    if(this.isEmpty()){
        this.root = node;
        return;
    }

    let queue = [];
    queue.push(this.root);

    while(queue.length > 0){
        let curr = queue.shift();

        if(curr.left === null){
            curr.left = node;
            break;
        } else {
            queue.push(curr.left);
        }

        if(curr.right === null){
            curr.right = node;
            break;
        } else {
            queue.push(curr.right);
        }
    }
}

   inOrderTraversal(node = this.root){
    if(node!==null){
        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
    }
   }

   height(root){

    if(root === null) return 0;

    let leftHeight = this.height(root.left);
    let rightheight = this.height(root.right);

    return Math.max(leftHeight, rightheight) + 1;
   }

   BFS(){

    if (this.isEmpty()) return;

    let queue = [this.root];

    while(queue.length > 0){

        let curr = queue.shift();

        console.log(curr.value);

        if(curr.left !== null){

            queue.push(curr.left);
        } 
        if(curr.right !== null){

            queue.push(curr.right);
        } 
    }
   }

   reverseBFS(){

    let queue = [this.root];
    let stack = [];

    while(queue.length > 0){

        let curr = queue.shift();

        stack.push(curr.value);

        if(curr.right !== null){
            queue.push(curr.right);
        }

        if(curr.left !== null){
            queue.push(curr.left);
        }
    }

    while(stack.length > 0){
        console.log(stack.pop());
    }
   }
}

const tree = new BinaryTree();
console.log("Tree is empty:", tree.isEmpty());
tree.insertValue(10);
tree.insertValue(20);
tree.insertValue(30);
tree.insertValue(40);
tree.insertValue(50);

// console.log("Tree is empty:", tree.isEmpty());
// console.log("In-order Traversal:");
// tree.inOrderTraversal();
// console.log(tree.height(tree.root));
tree.BFS();
// tree.reverseBFS();