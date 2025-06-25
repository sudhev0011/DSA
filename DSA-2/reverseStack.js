function RevereseStack(stack){
    if(stack.length === 0){
        return 
    }

    let top = stack.pop();
    RevereseStack(stack);
    AddToBottom(stack, top);
}


function AddToBottom(stack,element){
    if(stack.length === 0){
        stack.push(element)
        return
    }

    let top = stack.pop();
    AddToBottom(stack, element);
    stack.push(top);
}

let stack = [1,2,3,4,5];

RevereseStack(stack);
console.log(stack);
