function sortStrUsingStack(str){

    let mainStack = [];
    let tempStack = [];

    for(let char of str){

        while(mainStack.length > 0 && mainStack[mainStack.length - 1] > char){
            tempStack.push(mainStack.pop());
        }

        mainStack.push(char);

        while(tempStack.length > 0){
            mainStack.push(tempStack.pop());
        }
    }

    return mainStack.join('');
}


let str = 'hellodavid';

console.log(sortStrUsingStack(str))




// function sortStrUsingStack(str){

//     let mainStack = [];
//     let tempStack = [];

//     for(let char of str){

//         while(mainStack.length > 0 && mainStack[mainStack.length - 1] > char){
//             tempStack.push(mainStack.pop());
//         }
//         mainStack.push(str);

//         while(tempStack.length > 0){
//             mainStack.push(tempStack.pop());
//         }
//     }

//     return mainStack.join('');
// }